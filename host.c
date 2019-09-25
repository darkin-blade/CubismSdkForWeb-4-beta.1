#include "host.h"

char read_text[4096];
int dest_fd = 0;

int main()
{
  dest_fd = open(dest_path, O_RDWR);
  assert(dest_fd != -1);
}

void readfile(const char *path)
{
  int src_fd = open(path, O_RDONLY);
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
