#include <assert.h>
#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define CYAN(format, ...) \
  printf("\033[1;36m" format "\33[0m\n", ## __VA_ARGS__)
#define YELLOW(format, ...) \
  printf("\033[1;33m" format "\33[0m\n", ## __VA_ARGS__)
#define BLUE(format, ...) \
  printf("\033[1;34m" format "\33[0m\n", ## __VA_ARGS__)
#define MAGENTA(format, ...) \
  printf("\033[1;35m[%s]" format "\33[0m\n", __func__, ## __VA_ARGS__)

const char *dest_path = "dist/dest.js";
const char *src_path[] = {
  "dist/src.js",// 0
  "dist/cubismdefaultparameterid.js",// 1
  "dist/cubismframeworkconfig.js",// 2
  "dist/cubismmodelsettingjson.js",// 3
  "dist/effect/cubismbreath.js",// 4
  "dist/effect/cubismeyeblink.js",// 5
  "dist/effect/cubismpose.js",// 6
  "dist/icubismmodelsetting.js",// 7
  "dist/id/cubismid.js",// 8
  "dist/id/cubismidmanager.js",// 9
  "dist/live2dcubismframework.js",// 10
  "dist/math/cubismmath.js",// 11
  "dist/math/cubismmatrix44.js",// 12
  "dist/math/cubismmodelmatrix.js",// 13
  "dist/math/cubismtargetpoint.js",// 14
  "dist/math/cubismvector2.js",// 15
  "dist/math/cubismviewmatrix.js",// 16
  "dist/model/cubismmoc.js",// 17
  "dist/model/cubismmodel.js",// 18
  "dist/model/cubismmodeluserdata.js",// 19
  "dist/model/cubismmodeluserdatajson.js",// 20
  "dist/model/cubismusermodel.js",// 21
  "dist/motion/acubismmotion.js",// 22
  "dist/motion/cubismexpressionmotion.js",// 23
  "dist/motion/cubismmotion.js",// 24
  "dist/motion/cubismmotioninternal.js",// 25
  "dist/motion/cubismmotionjson.js",// 26
  "dist/motion/cubismmotionmanager.js",// 27
  "dist/motion/cubismmotionqueueentry.js",// 28
  "dist/motion/cubismmotionqueuemanager.js",// 29
  "dist/physics/cubismphysics.js",// 30
  "dist/physics/cubismphysicsinternal.js",// 31
  "dist/physics/cubismphysicsjson.js",// 32
  "dist/rendering/cubismrenderer.js",// 33
  "dist/rendering/cubismrenderer_webgl.js",// 34
  "dist/type/csmmap.js",// 35
  "dist/type/csmrectf.js",// 36
  "dist/type/csmstring.js",// 37
  "dist/type/csmvector.js",// 38
  "dist/utils/cubismdebug.js",// 39
  "dist/utils/cubismjson.js",// 40
  "dist/utils/cubismstring.js",// 41
  "dist/src/lappdefine.js",// 42
  "dist/src/lappdelegate.js",// 43
  "dist/src/lapplive2dmanager.js",// 44
  "dist/src/lappmodel.js",// 45
  "dist/src/lapppal.js",// 46
  "dist/src/lappsprite.js",// 47
  "dist/src/lapptexturemanager.js",// 48
  "dist/src/lappview.js",// 49
  "dist/src/main.js",// 50
  "dist/src/touchmanager.js",// 51
  "dist/whatwg-fetch/fetch.js"// 52
};
const char *insert_text[] = {
  "./Framework/cubismdefaultparameterid.ts",// 1
  "./Framework/cubismframeworkconfig.ts",// 2
  "./Framework/cubismmodelsettingjson.ts",// 3
  "./Framework/effect/cubismbreath.ts",// 4
  "./Framework/effect/cubismeyeblink.ts",// 5
  "./Framework/effect/cubismpose.ts",// 6
  "./Framework/icubismmodelsetting.ts",// 7
  "./Framework/id/cubismid.ts",// 8
  "./Framework/id/cubismidmanager.ts",// 9
  "./Framework/live2dcubismframework.ts",// 10
  "./Framework/math/cubismmath.ts",// 11
  "./Framework/math/cubismmatrix44.ts",// 12
  "./Framework/math/cubismmodelmatrix.ts",// 13
  "./Framework/math/cubismtargetpoint.ts",// 14
  "./Framework/math/cubismvector2.ts",// 15
  "./Framework/math/cubismviewmatrix.ts",// 16
  "./Framework/model/cubismmoc.ts",// 17
  "./Framework/model/cubismmodel.ts",// 18
  "./Framework/model/cubismmodeluserdata.ts",// 19
  "./Framework/model/cubismmodeluserdatajson.ts",// 20
  "./Framework/model/cubismusermodel.ts",// 21
  "./Framework/motion/acubismmotion.ts",// 22
  "./Framework/motion/cubismexpressionmotion.ts",// 23
  "./Framework/motion/cubismmotion.ts",// 24
  "./Framework/motion/cubismmotioninternal.ts",// 25
  "./Framework/motion/cubismmotionjson.ts",// 26
  "./Framework/motion/cubismmotionmanager.ts",// 27
  "./Framework/motion/cubismmotionqueueentry.ts",// 28
  "./Framework/motion/cubismmotionqueuemanager.ts",// 29
  "./Framework/physics/cubismphysics.ts",// 30
  "./Framework/physics/cubismphysicsinternal.ts",// 31
  "./Framework/physics/cubismphysicsjson.ts",// 32
  "./Framework/rendering/cubismrenderer.ts",// 33
  "./Framework/rendering/cubismrenderer_webgl.ts",// 34
  "./Framework/type/csmmap.ts",// 35
  "./Framework/type/csmrectf.ts",// 36
  "./Framework/type/csmstring.ts",// 37
  "./Framework/type/csmvector.ts",// 38
  "./Framework/utils/cubismdebug.ts",// 39
  "./Framework/utils/cubismjson.ts",// 40
  "./Framework/utils/cubismstring.ts",// 41
  "./Sample/TypeScript/Demo/src/lappdefine.ts",// 42
  "./Sample/TypeScript/Demo/src/lappdelegate.ts",// 43
  "./Sample/TypeScript/Demo/src/lapplive2dmanager.ts",// 44
  "./Sample/TypeScript/Demo/src/lappmodel.ts",// 45
  "./Sample/TypeScript/Demo/src/lapppal.ts",// 46
  "./Sample/TypeScript/Demo/src/lappsprite.ts",// 47
  "./Sample/TypeScript/Demo/src/lapptexturemanager.ts",// 48
  "./Sample/TypeScript/Demo/src/lappview.ts",// 49
  "./Sample/TypeScript/Demo/src/main.ts",// 50
  "./Sample/TypeScript/Demo/src/touchmanager.ts",// 51
  "./node_modules/whatwg-fetch/fetch.js"// 52
};

void readfile(const char *path);
void sendfile(int fd, char *text, int size);
void inserttext(int num);// 插入除js外的文本内容
