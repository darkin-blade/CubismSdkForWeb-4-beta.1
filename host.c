#include "host.h"

char read_text[4096];
int dest_fd = 0;

int main()
{
  dest_fd = open(dest_path, O_RDWR | O_CREAT);// 如果没有则创建
  assert(dest_fd != -1);

  int i = 0;
  for (i = 0; i < 53; i ++) {// 合并文件
    readfile(src_path[i]);
    inserttext(i);// 插入其他内容
  }
}

void readfile(const char *path)
{
  int src_fd = open(path, O_RDONLY);
  if (src_fd == -1) {
    MAGENTA("%s not found", path);
    exit(1);
  }

  int src_len = lseek(src_fd, 0, SEEK_END);// 源文件长度
  lseek(src_fd, 0, SEEK_SET);

  int read_size = 0;
  while (read_size < src_len) {// 读取文件
    memset(read_text, 0, sizeof(read_text));
    int temp_size = read(src_fd, read_text, 4000);
    read_size += temp_size;
    sendfile(dest_fd, read_text, temp_size);
  }
}

void sendfile(int fd, char *text, int size)
{
  while (size > 0) {
    int temp_size = write(fd, text, size);
    if (temp_size <= 0) return;// TODO
    size -= temp_size;
    text += temp_size;
  }
}

void inserttext(int num)
{
  memset(read_text, 0, sizeof(read_text));

  if (num == 0) {// 第一个文件
    sprintf(read_text, "\n({\n\n\"%s\":\n", insert_text[num]);
  } else if (num == 52) {// 最后一个文件
    sprintf(read_text, "\n\n});");
  } else {
    assert(num > 0 && num < 52);
    sprintf(read_text, ",\n\n\"%s\":\n", insert_text[num]);// 注意,每读取一个文件,向其后面插入的是后一文件的文件名
  }

  sendfile(dest_fd, read_text, strlen(read_text));
}
