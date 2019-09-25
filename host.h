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
  "cubismframeworkconfig.js",// 2
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
  "src/touchmanager.js",// 51
  "whatwg-fetch/fetch.js"// 52
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
  "./node_modules/whatwg-fetch.js"// 52
};

void readfile(const char *path);
void sendfile(int fd, char *text, int size);
void inserttext(int num);// 插入除js外的文本内容
