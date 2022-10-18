'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cfd7cf876d9c3e2cf8b68ff70799753e",
".git/config": "6400c4e95a4646be82b5d4bacc896a16",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b7b5fa5778c4757e7c19b1ad720bd41a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c1d6f40875306c340fc033371e602d8f",
".git/logs/refs/heads/main": "fe9baafd88ef21bf3dc5f23ceb4d5d4b",
".git/logs/refs/remotes/origin/main": "20236b058d08db0fad63ed88044bd956",
".git/objects/00/3edcbb23dd6a7655463f82aa0c874d591f5f38": "b7fc99c2b39b2351b2ddbca21f08d608",
".git/objects/02/258ee3d047f7f7ac3a03b9aa7d246410f019ea": "1baa8992a8110572d2a62f773eb62bd7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/c41b2e05273b2218e5c0e198e89e12ced63a6e": "51574547d16c690cce8537ccbde491b9",
".git/objects/09/d0e13e797683e95de742adeee999bc11453084": "89ec17350113167dad05428f14013f2a",
".git/objects/0a/acbc0b01c0971cc0d9d5cc717cf34ebd53e82b": "42555f47a9c82f0e15c98474488fd5bd",
".git/objects/0c/d0d2e376d5687c58ebca2f6c80e2c107280df6": "0ba848cda601a510634023f75b470780",
".git/objects/0c/e3cc01ad8a41de20a9a10a9c55fc8108e520a4": "2540dfd82ad2c31c191d672ce78699e1",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/c092cbae084fd21ef7741666034554f8329420": "891ca1bd62362553e40fd5ca0e10c571",
".git/objects/10/76930b69b7365ded7e298306de0e142bbd7de3": "2fdf46f9f28c93a721f99713d395c323",
".git/objects/11/10df952dd1f08f0fb857cd5904624d3321cccd": "94cad904cf5925c65a585a59242706dd",
".git/objects/13/c83aa652b880c89fbfaa1f82b054c7481c6d56": "fe73c8d61d22526a7634ad2734cffd10",
".git/objects/18/40d2e5d5038e72c0cdb2515ca9da9745947c88": "54e2d1391fa13cf7581e4dfbfa51575b",
".git/objects/19/59b77d7153a2b1c69189aac185644c720f440b": "42513827dca74b79703baea877a69dd1",
".git/objects/19/86aea7966201d1f4084aa01e94de1c9b9abac7": "5056dc85269804a0b53ce6ca82a475f5",
".git/objects/1a/6f8e2655964d335b8fcb7bd92e1b939fdadf88": "89ae92cfbec8f57989594895beb99e65",
".git/objects/1b/8c5ce9dc7daa254e0b9ff7901eb71fbaf7c4b9": "425317fea4b99cc27b3e1dc71e1ab327",
".git/objects/1e/6fbdbfa3a4bc29054e56e4a8c6411619c471df": "10a635c1119d40c4d3f8013e699a7d4f",
".git/objects/20/40a8bd871e478703d1089259d3ccd12a6533cf": "dde408cccd0daf25a6333c1ce43e1730",
".git/objects/22/e0f8e3c7ed6523448026b244ff06ace43e2f82": "559dd8d299e24989a9d3fe356c7e6965",
".git/objects/24/018a5bfa627c0e8bd73fc1291443092d7d8236": "ba7871edacdbbd25bb4bfb8960c0df79",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/26c167d6d2c320fe70628825335b034cd8ca8f": "bee5e14eeee573c99cea064afc6a68b7",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/a959e8d292a8f03284016342d237c08066ec72": "dad4de878b62f11fe3d5251475c12991",
".git/objects/2a/d098c162ea2729d1e71995feb658d358402e75": "e3afd6312517226fd3cbac9b2fea275d",
".git/objects/2b/cb98c3a152d5e837921efc71caa61fa3c30971": "854fa477fe01128208bf614d5d077011",
".git/objects/2c/c1698a5ecc8892955c09f242a75190878b96a2": "141f51d62c65c837fd890dc4620775d6",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/cf34012c50db49511f88770d9ad71d4ffdd8a9": "9af9313ecb7e8aa3cf3820ec5d2c5997",
".git/objects/30/97664be7704d3111e4ddefc1fce8093d854d99": "a028fe5920ef9b2b2539be761430f4ad",
".git/objects/33/b58e92596bbc03afc7e4f27c1a0354c3184007": "b82467d76eba7e51c5becf59b0a99bfc",
".git/objects/34/ba40ea8a84fb698fde129ce985dac72cf9a058": "ccfa65c570257701651309f234f28a15",
".git/objects/36/7a9507065879fd6a3391432f7193df4a1ac0b6": "ae3b4b42971c7bbd353e1b6f17304f64",
".git/objects/3a/19ae64bee9a7d625e34cd90dd878f762f99a6c": "11a1a05e974344f289efdbaf05108013",
".git/objects/3b/3abc53288e71918ddce771c754e4739e36bf4c": "b998be772b8fa7a6ff21e88b7e4aeb9a",
".git/objects/3b/ea46849c5e917152120ab3b02767eff11b13b8": "e567d52df95583c73e51905a9ba17c04",
".git/objects/3c/9c6bc4f70e08e0941e40605e0d6996f8fbf63b": "8d56635bd49513fdf5c626c9403fa7f9",
".git/objects/3e/552f94539126e3ed2726491ef03e818cde95fe": "76b8069b5ee1dfda88c59c1404be0ea8",
".git/objects/3e/90e1cd19a6a9070b59166ce83d120b35767167": "56c0877bc1bae44bcd8fa7b4fe7d3a98",
".git/objects/40/ac7cc4c5eb45eb4b8a28362b3065b5841ba75e": "8bfdbd8542baa4a71edff09d2b6bcb98",
".git/objects/41/e8a83f85cb04667d55c08556d0f4a1ee9b3d25": "18d1ded48d6b14e920902d4e93194463",
".git/objects/45/85079be704bd753dd5e01fb10afcd8aae7296c": "1b681d987e49318c045eb0d7ea5730f9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ce83a08ca137e7d29c37adc24c86fe2a8d0fa0": "34fd0ab2e206fffb3606a3378e7a5fa1",
".git/objects/47/f8bedbc92699465f36f5d77bf5fd79a8ee6a01": "4080a056d9423a8f4ba8e62dc75c67b5",
".git/objects/49/b28051bb7892c8187195e967af4d58b90cbec6": "7fdfb9b9e699841edfd9342bc58722af",
".git/objects/4a/7f62cf990ea447a83b60db711c16495e32af8d": "12fa824c949ab60e51e175fc60226a2c",
".git/objects/4b/74f11422573882be5f39e609d25a3667b5ac9f": "dfb675971ac06500ddc140b88379886b",
".git/objects/4c/d81399f39c0a60911c4e7133ba703fb5e7dbac": "59c6379140f109b5ddaa50834acaea5d",
".git/objects/4d/2bf250fa1ca90fa4161a1ea286f77a9e308c9c": "24295e5ba67c3b2e0b5cafc351fcafc0",
".git/objects/4e/194c6e0a22a337af28913472e7502808ab2907": "989a78fca8d4dc51ce03ecb5aa3ec68e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/8c4e40efca39d5688ddfa1f64d0aea53097483": "2e9f54d36aac55a3ef5c295acaaed543",
".git/objects/4f/1fb1bdd747acc51081c87bd2113ec795b3e5a7": "7608476a0cf67d5952bdc4ffdccf7bb1",
".git/objects/4f/97be3a40c93bbde78cfb586a37662a34085ecd": "008c8502ebda4f69ccf9953c6ced4575",
".git/objects/50/92ac2b16cf387ccb18759851aaf3af5384cd1a": "138d44ed68c96b2036c0fe6cf37d5791",
".git/objects/53/10d7437ea4e274a60471bf0f5c0fa7acc70898": "0170e2509f91b7cd108bede9ca5e5cb6",
".git/objects/53/a0b1c51bf1fce3d926ace1c52fb78ab14642c3": "f10e12e6ecdd668320c2ea6009403a8b",
".git/objects/55/52d4e4830564f22ace3178e736889dc7d83324": "4843b940692addd0df918207e9cf40a9",
".git/objects/59/c5b152284af7908eb8bfba68abe591b6de57bf": "45656be7c8059764e2cd714fc95b33d0",
".git/objects/5a/07f4b558fd22059368d5a048d905dfde03c867": "51f6a1dfad809e747235df825fd65173",
".git/objects/5b/76839e9afff0989d2a42042246bbda49a1cf46": "d3ec7c83e112d8723d6a842a49f904ba",
".git/objects/5d/dc2e832a1c53a642c64fe9757f9827077f7ca4": "c9e1d97515e915250ae407dbb87689f7",
".git/objects/5d/f99542cd4e9460f400d2eeab507d677db2d988": "f4a3ce8bc807e5809b2c474988ec8689",
".git/objects/5e/3fc27ed403193c5a04de6ebb903dc382d12608": "4ad8e25def5bbb4c46163acc8a6956fd",
".git/objects/5f/2a9981c90cfb2789e4b6a4326caacb69392bd5": "6133a8add57f8434d421c3ddfe71e673",
".git/objects/60/a340f250073511dab07516c0269ab74beec2a6": "4a9af0b49046150ad408662125f9e837",
".git/objects/60/d7473863cf8659542e79a65b351845bcca687d": "91a110481ceb55d838ce00f3db938dde",
".git/objects/63/02dfb2a45975bddb96625360335348f93e578b": "86b86ce7002f3e98779def07b9f4aff0",
".git/objects/63/61eb1ff783b0c4f8e806902353c4cdcc80535d": "0c634cb351dc732e70d8fd5ef22c440c",
".git/objects/65/a9865bf1bd1ae2b8451cdcc3309017bf7326d2": "a1dda90d5c7010d12d46082083a5c6f0",
".git/objects/68/33decd048663e8e23830079f598c882e0e2af2": "e5279269f5e1ec3fb16a2d78ec2e1e1a",
".git/objects/68/65b76aeaf29c864722bf225a78f6334dbb7f59": "f6c62371012eaca43e494f72b1949517",
".git/objects/69/8b927e9b33e1a53934b984405f9ae4e2d59161": "838b5766e5e9fd69fec578b515f27bbb",
".git/objects/6e/e87dd256f0b73a6bdf49858931e0a5eb54f81d": "4625f32934d2e9d21c5b15b4bc828562",
".git/objects/70/6777e7e3d07d125a95a053b4902a459ec91b70": "2a5080604bef85ce90854e0b5ee303a7",
".git/objects/72/2c1f47c5a3721ed4b51c1f9dc1ab70e7318a2c": "946c90c45693e765af49d6fa3a66e2a3",
".git/objects/72/e5ae33a3ef3034e234aa9b8bebe515b760c14a": "038299a799d60ab1ce38be55b29d6c92",
".git/objects/74/24eb85318ade207a647578ca0956c97e2c605a": "5449cbc98aba9cb90cea57c8923c0c84",
".git/objects/76/1d334f96095d9a4c58eb414fd55903451a1884": "0ce241160547be920740872338d21cc2",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/69efdf74c778a94d943c944bcce0aa300d42b9": "5b62a63f686f6d1084e0c3a1357ec826",
".git/objects/78/fef69c3a5e77c20773f2e2892b424e075bbb5f": "b2f13702313b9da08dc8f96a7311e9a3",
".git/objects/79/34b2fb5081061dd66bde3fbb38ed392a4d3c98": "e39ae635bb870c64b2159c4515c55661",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/eb50695dcdfeef15e4a2f56f47c39ed45ccefc": "5144db0896b1880d6e41bffb60fbc5d5",
".git/objects/7d/0ada44cd64770d8b5393800a37fdd34f8e0553": "51aa85a0f66d3e5d44f0530a57f2502a",
".git/objects/7d/cd478cd078ac1d451a1aa9cd16a7248df6c03b": "81bf8bc39985f5e790b094a3827fc75d",
".git/objects/7e/09918a4c70892868e92d8b60ad543c2e2ee24c": "7e3605ef02fb924965156a5b62807ade",
".git/objects/80/c844f7053a06b7ee8d823159d4abaefe593265": "c51969594072dcd53d5c660bb8fb005f",
".git/objects/82/53b5ca926b941f996cf56e37c0efd7c5630afe": "6a86a2a68661c822670009af4999d575",
".git/objects/85/34915fbcba671c37dbb9275852b2fa7baa3e5c": "3bac17836d6facdf109005a6ebbd32c3",
".git/objects/85/6a616fcd38c79efcd2167ea32ad494d1d7bd27": "f651e35d1ba267f128947d46f0b6b9e7",
".git/objects/85/a133c56b00d6a5d6ee2e0e328c3e1efdd574e6": "154252418536370d30402ecdb8a89575",
".git/objects/86/3cc86c23e4267515379ab632964bc46cb47114": "dbbec3f0c77deb1ba6bbbe730eef30ce",
".git/objects/88/23ca32edad46133c5c767597e3ab6e33ebe412": "531bdfcc7a4157cef9fe725cc87d6979",
".git/objects/88/390fa8e6bfd7dbe28e39116444d13376fb7941": "41cd7b86cfee25297fc854c51bc8dcb9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/28cb0f83d7a9e3cbdf4c9b778a6628fc1eed7a": "cc06396a9700a468ee8c39332dc2529c",
".git/objects/89/3747ac52071a4ee8972c4318653c892ae0e282": "7d8f9dedca3750436bb7079d5382e033",
".git/objects/8a/28e1cf4b4768cd1452f77e6c3bbf608be7beb6": "eee7faab0af8b68f220d761fac355036",
".git/objects/8a/2cf147fda26df2ca4afaff9023321659bf7fd7": "dee1d7810fc4acf79cd9689cc6538dab",
".git/objects/8a/2dfbc84a315b7bd8ca73a0278bb0c87bd85d11": "6a35b764c34f24efb47f5973112173bb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ca81fd4823307d3e767558a37cbbf878b0a924": "eb6ee279a0ad3bff5ae3ddacd34b6b90",
".git/objects/8e/68db90bd5f49c6379fcc2cae881515e0a93430": "e6a13b85310b74af6457bdecaf6814a4",
".git/objects/8f/95372d38dd613aeed507afc879178ec5d0e34b": "712fdb95221452ffbb5a2a31977d5a1c",
".git/objects/8f/9aa3446372db47c4932d05c80c7ad5fa3929c7": "e714c4ee8cfaf91f57ecc2c9f0f147a8",
".git/objects/90/f1d1f5d80b86aa0ba8bd96968d1b1726dc2e3b": "3a5d1998ada910afeef8b3956bb863c6",
".git/objects/95/a2c45abadb5be727538448e91134e2b1318e3e": "b5806f8af346b45816ce18103834dd26",
".git/objects/96/4eccd91dae51ee1c0e549b91b64fb74b38e780": "8411b78d7d051518c105ce5c0c99ed9e",
".git/objects/99/5f6f2ff779392fa41b146563eb955e52368e3f": "9464cd8ef16876c068106e6972bddd69",
".git/objects/9a/2cd17c7f1137119ecaee804ffea578ccf16396": "a45569802e9669e23efd03cc266b5b15",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b3f596c5d26dec8b58078db501b9ee75b58e1b": "b7556699c62ec42387b11c02bf071bcf",
".git/objects/a1/f608b4a1be7c340532cf05da8e66b8d09de339": "6dae3e6f94936e9cce6d2285f1561a2b",
".git/objects/a4/eca050e346bcffedd54c287d683912b07dc8b7": "4c609dfffe23ce2235c1995645dacd93",
".git/objects/a5/6ae9981dd75c0a3596062e990bf4e6fc0cb4c4": "5da2a630403e37df40f02991238e069f",
".git/objects/a5/94426b1e0eea259c569983ea4171d3c47fcd48": "40eb95228fd3951938ba7dc5aafeaf8f",
".git/objects/a7/76d8ec8ff4a6fd236cb85a2d5add7fe2e2a634": "5c3734fa0176cb3a6802704847485923",
".git/objects/a9/4b093e72eff91d3377a5aaa483081448a1ec56": "c8286990e2efffd227633d1c89ceff53",
".git/objects/a9/cf95361edd4bcc381f6d6a37e9d00186e59346": "f965b4efe13f1f4d1472df5135cd5e67",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/4d5d691f3841794ba230859d7aecb3170d7cc3": "eee65e24f6ff6258bf2bc8ef792eb96b",
".git/objects/ab/73c5b77d73f0b46269edcd3738a83506c295a3": "7a3ccfce1f4ad18c14e890f39d4426d1",
".git/objects/ad/e8de3cbebf444623f4ce86c0a1858f78d8789f": "257d529557ef6911583ce24095150835",
".git/objects/af/e7cc5ac8a3ef2192814d65204a45c7c03e624b": "aaee952a53c02f5e647471f5a583851e",
".git/objects/b2/b23b6640188f8b960157dfe8cca963d77a36db": "6ce5ce36145aefe17765efdc6e098f7a",
".git/objects/b6/22b146aa670c6eb0bc94af15050fd16ffc4f77": "46c4bb55c2c482dcb9aee5234bd4567c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f05c6ebb4feefa9832035877f170d4a1002310": "fc5efb9bf644c9e03a3b9f537f343f5c",
".git/objects/b8/3a61211cc289b66187773c4ef9e7773cb26f66": "18ee7245b735b69ddcddf129890f23da",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/00d8869715e40588f9299c5b64f7e2721cae03": "1743817d8aeb7a6c5a43071f6537e34e",
".git/objects/ba/0297aec9ac9143c9569b5101f32bf57f9c221f": "696dee48855a95ca5501b40f1627c824",
".git/objects/ba/17ed0e4d977c7313b0cb655230d17f64e18aee": "5c879f051630280d34735a2cf227b585",
".git/objects/ba/8ffcc54c3ae0d676d8191afb860d2c2303b3a9": "e4d3f17b913246390aa41b1a00c3fe84",
".git/objects/bc/667abb35fbc3f2242575e5c8776740d7faf378": "0d2d1a2c5d2e9af0cdd017d91aebfa9f",
".git/objects/bd/760f9a0e70c4eea2d38aa3a0aab6cdfa8b5865": "61043071789f791d18fc3cdcd14dd672",
".git/objects/bd/f085c31a777571c5058c0ae4396bf1a0290bdc": "2d232cab178fa6c613ac541989ed8a47",
".git/objects/be/807705e5f0d7dc800ad34eb1ad62f28996794c": "aa864679ffd3d7fea30cc6bfddc694ee",
".git/objects/c2/aa232531954b68a1927c4f1659fc6ee153fe54": "2e8401bf9b27b8ea666e894a51c3b249",
".git/objects/c3/c69ba3554328030459cdd0ea94027646ebdebe": "6c48306730ed083b3cdc2050f26a6666",
".git/objects/c5/4e9a7e663bec9c2f988cc4450608557c250aff": "6850499d919a1dc45539907e0eaf3efb",
".git/objects/c7/78c061614bfc7bd087a8461a57df40a6f1efed": "33d5e7981e78827cd1514e150be1eca0",
".git/objects/c9/b122efc983a08b163c5861201c514426cb92f5": "8267a4901d2d3f2fd6898d8f36ce509a",
".git/objects/ca/d007bc5a2e4199b001e293b26ab3f0f300f333": "1dd318e71314c097c972927feb9e677a",
".git/objects/cd/0a31af7ceb52b701feeb8d36fddc6fe4ded8aa": "e67e1760c1d6c7d4640ed4284a63737c",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/66a4473390dd54e3faafb63c83e157e68efcc1": "5bc227feba9372076bb19e5e0d3f3a1c",
".git/objects/d0/5f2e52fd171bac14285562ca86dbf667676322": "ff59c331350187a9698e6f772bd049bc",
".git/objects/d1/4fb84c75d7382ce316582ef22ee5adb229cd90": "733e1b36ce9890098a33f2fc6eeddf04",
".git/objects/d1/d2f52a8f5735a66c5ac086e442308eddb62ec7": "7971fdb8ae2cdd665db557a0951fc9e1",
".git/objects/d3/a3b3014400d4d97f70c2b20d5efff7486f4f40": "3801c270e5bc7aab55cda0c77b997fe9",
".git/objects/d3/f53f0050a2487921fdf6724ccdf62c59c200ab": "9b6940e64b8754e1ae58490a66ae8baf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/b19a90e18c23cb288c2e8cd22f49e4660dd525": "2392205ef7603449198ef78edf742b1b",
".git/objects/d8/f4d2a11f6a632ea2f17b0b5630759a59fa6499": "e88af8eff3baac60352b5cb97c7cdd39",
".git/objects/d9/496b21296d4afe9c2d299ec4c70261dce0b438": "6983c14799d18f55a763c6866cef9b32",
".git/objects/dd/30d86b81bdb9dd1bb17f6fae90f0c592fc838c": "af138f595dcb37ce3cd2de92cd15c852",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/3a17cb5a4785b1c5718545b78d87feec4bd0be": "78c5d54fd612cb6029e54ca71860812a",
".git/objects/e2/1ff5f1ec01719e9e699df260db5be8b220aa2a": "22773d34ed50d272d28a6ca31f6361fa",
".git/objects/e5/1ddfe58ef760f98613f062ade1ada16852cf6f": "8d1c75c4760387a9f9f6125b0171401b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/9bbffcd78f2f54fa5909f9b09f63bef2e3345c": "31497cc1af8f986a37c936a41a1e138c",
".git/objects/e5/ff27ae87f48e299433e691e5a9546225a51c1f": "fe6b88eb2d23e1984f630f3be25e3f6d",
".git/objects/e6/eb4d41f8ff5cba71ef92641727548c35ffd2d8": "b7522c24175790ac15544c1683f0fbd7",
".git/objects/e6/f842f589204ee9f747f61fc6261c182f63d7e2": "3594c4cf71df9dd741a1d665fb207c78",
".git/objects/e7/02541bf41a7434806ea2f1d1a3b69e0359edef": "d4ce35c54f9704dbce7167a0c74ab0ae",
".git/objects/e7/8bc8f4ccae9800fc60d6302760cc8951ee6b44": "68f2535218c5cf508685617fbf44797f",
".git/objects/e7/def95d3f44c82086f6e74d93fc0aadac7c454a": "28a34a73fd3e94b3fd53733dfaf2ed0e",
".git/objects/e9/1d903287270ac4d2c4c183441bac5149f3d597": "f34728d924415bc8c67ffc0228d327b4",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/e139bb3d7d44e2bc5736b75032dc707abcc30d": "392ec9cd1830a09498f20d69e0143630",
".git/objects/ee/cc9bc049a91b78f5aee4d4a11fee9efa815411": "829c0a0b040630035f1c36da9a43d65e",
".git/objects/ef/d91f1f0f10616696370fd4b9874bf3e312cb37": "7f59996a28ce66ab3eed3778d4e4c2a3",
".git/objects/f0/3099303c18fd46f3a12db36aebb04499f117a6": "1cf0f4710d21f6de867d649ba7c6c867",
".git/objects/f0/a6ef5c44e02ec56518fbe3fa8d2b62ce335e5e": "a9ba1cc1d084d2f820015f4da7ddbecb",
".git/objects/f0/dca515bbd2e933a3e8ee3a48326de50df84022": "fbeb4df42b64793924a0cd810ef37600",
".git/objects/f2/4a88b01036d01169ea3da742b17cf9b2218ae8": "d8c47c72b20f0c09afe8acb33a8510d2",
".git/objects/f3/a9e17042d5bcf9f26aa83c56428ea8df81cf09": "3f15b8412fe8402d53d571f368cb01c1",
".git/objects/f4/123c6e4f10faf2a6c151174793bb27e9971663": "6d9c5be760fa4e58f101516e5e7a8186",
".git/objects/f8/6b1943c62c8be100979a94b2c750796cf90b0e": "a4d5fc5007ffb4708c5e47f666222648",
".git/objects/f9/a37f0b65a8f6dc17555d7dbfb9b30125181a9b": "09b800f2de8eecc74fd3c1cb645b16f3",
".git/objects/fb/2d05fb6ddf74fd5cfe1b0408002fcd1f125a4d": "623ddd2bbe6984f5ef9ba5162c39adef",
".git/objects/fd/72efb2bf882f3e550360fbc95457ea752d4b4b": "cae85c13a7cc310f1cc06faa88b3bf78",
".git/objects/fd/e5dee0af0ff2a89fb721a31a8d5fabba8a8b58": "1cd80734cc720bf16df4a066da117d10",
".git/objects/fe/c81a3358dc588867f027520904c04ee4b701ac": "b586115f5bbda2e824e842ef3fa26ce6",
".git/refs/heads/main": "d49bb2c588dfbbde62edfeb7da624c0c",
".git/refs/remotes/origin/main": "d49bb2c588dfbbde62edfeb7da624c0c",
"assets/AssetManifest.json": "c57a1eacb614d874d31ad49cdfcefef0",
"assets/FontManifest.json": "f5da4fb23f249716b1eb620bebdeab8b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/MerriweatherSans-Regular.ttf": "f907c373eb18dfcc44ce28f753388935",
"assets/fonts/OpenSans-Regular.ttf": "58b1f440729d267697bddcddb994bce9",
"assets/fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/images/clocktickmarkup.png": "78fa7571930dc81380bf42b4303817d2",
"assets/NOTICES": "7a67ad15c39f1356d3ef64241071d22d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "df6861f9d6348c019794f3d1f73b6e9a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "63c768f693686de67952e28be70b54f8",
"/": "63c768f693686de67952e28be70b54f8",
"main.dart.js": "e7e285cd0274bba604abec544bb826d9",
"manifest.json": "b4c28e4e08950e0973ca8b220f5d2078",
"version.json": "056d81a8b765ce083df0c03cdfc37825"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
