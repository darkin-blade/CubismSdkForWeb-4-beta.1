#include <assert.h>
#include <fcntl.h>
#include <stdio.h>
#include <string.h>
#include <unistd.h>

#define CYAN(format, ...) \
  printf("\033[1;36m" format "\33[0m\n", ## __VA_ARGS__)

const char *dest_path = "dist/dest.js";
const char *src_path[] = {
  "src.js",// 0
  "cubismdefaultparameterid.js",// 1
  "cubismframeworkconfig",// 2
  "cubismmodelsettingjson.js",// 3
  "effect/cubismbreath.js",// 4
  "effect/cubismeyeblink.js",// 5
  "effect/cubismpose.js",// 6
  "icubismmodelsetting.js",// 7
  "id/cubismid.js",// 8
  "id/cubismidmanager.js",// 9
  "live2dcubismframework.js",// 10
  "math/cubismmath.js",// 11
  "math/cubismmatrix44.js",// 12
  "math/cubismmodelmatrix.js",// 13
  "math/cubismtargetpoint.js",// 14
  "math/cubismvector2.js",// 15
  "math/cubismviewmatrix.js",// 16
  "model/cubismmoc.js",// 17
  "model/cubismmodel.js",// 18
  "model/cubismmodeluserdata.js",// 19
  "model/cubismmodeluserdatajson.js",// 20
  "model/cubismusermodel.js",// 21
  "motion/acubismmotion.js",// 22
  "motion/cubismexpressionmotion.js",// 23
  "motion/cubismmotion.js",// 24
  "motion/cubismmotioninternal.js",// 25
  "motion/cubismmotionjson.js",// 26
  "motion/cubismmotionmanager.js",// 27
  "motion/cubismmotionqueueentry.js",// 28
  "motion/cubismmotionqueuemanager.js",// 29
  "physics/cubismphysics.js",// 30
  "physics/cubismphysicsinternal.js",// 31
  "physics/cubismphysicsjson.js",// 32
  "rendering/cubismrenderer.js",// 33
  "rendering/cubismrenderer_webgl.js",// 34
  "type/csmmap.js",// 35
  "type/csmrectf.js",// 36
  "type/csmstring.js",// 37
  "type/csmvector.js",// 38
  "utils/cubismdebug.js",// 39
  "utils/cubismjson.js",// 40
  "utils/cubismstring.js",// 41
  "src/lappdefine.js",// 42
  "src/lappdelegate.js",// 43
  "src/lapplive2dmanager.js",// 44
  "src/lappmodel.js",// 45
  "src/lapppal.js",// 46
  "src/lappsprite.js",// 47
  "src/lapptexturemanager.js",// 48
  "src/lappview.js",// 49
  "src/main.js",// 50
  "src/touchmanager.js"// 51
};

void readfile(const char *path);
void sendfile(int fd, char *text, int size);
