/*
• @David-Chian
- https://github.com/David-Chian
*/

const _0x3db593=_0x1f41;(function(_0xae9c48,_0x15ebd1){const _0x3d5000=_0x1f41,_0x5da9de=_0xae9c48();while(!![]){try{const _0x2e40ab=-parseInt(_0x3d5000(0x18a))/0x1+parseInt(_0x3d5000(0x1a0))/0x2*(parseInt(_0x3d5000(0x1ad))/0x3)+parseInt(_0x3d5000(0x1af))/0x4+parseInt(_0x3d5000(0x1a2))/0x5*(parseInt(_0x3d5000(0x19f))/0x6)+-parseInt(_0x3d5000(0x188))/0x7+-parseInt(_0x3d5000(0x1a8))/0x8*(parseInt(_0x3d5000(0x192))/0x9)+-parseInt(_0x3d5000(0x19a))/0xa*(-parseInt(_0x3d5000(0x191))/0xb);if(_0x2e40ab===_0x15ebd1)break;else _0x5da9de['push'](_0x5da9de['shift']());}catch(_0x2dff5b){_0x5da9de['push'](_0x5da9de['shift']());}}}(_0x5a89,0x70cfb));import _0x421045 from'fs';import _0x440ce6 from'dotenv';function _0x1f41(_0x529ef7,_0xf04f3f){const _0x5a8942=_0x5a89();return _0x1f41=function(_0x1f41d4,_0x287f9e){_0x1f41d4=_0x1f41d4-0x183;let _0xa7b2b3=_0x5a8942[_0x1f41d4];return _0xa7b2b3;},_0x1f41(_0x529ef7,_0xf04f3f);}_0x440ce6['config']();const SECRET_KEY=process['env'][_0x3db593(0x1a7)],obtenerDatos=()=>{const _0x243d79=_0x3db593;return _0x421045[_0x243d79(0x1ae)](_0x243d79(0x18b))?JSON[_0x243d79(0x196)](_0x421045[_0x243d79(0x189)]('data.json','utf-8')):{'usuarios':{},'personajesReservados':[]};},guardarDatos=_0x2a71e2=>{const _0xcabdb=_0x3db593;_0x421045[_0xcabdb(0x199)](_0xcabdb(0x18b),JSON[_0xcabdb(0x19c)](_0x2a71e2,null,0x2));},obtenerPersonajes=()=>{const _0x3368d4=_0x3db593;if(_0x421045[_0x3368d4(0x1ae)](_0x3368d4(0x18c)))return JSON['parse'](_0x421045[_0x3368d4(0x189)](_0x3368d4(0x18c),_0x3368d4(0x1aa)));else throw new Error('No\x20se\x20encontró\x20el\x20archivo\x20de\x20personajes.');};let darrwHandler=async(_0x5a5ec0,{conn:_0x5becd6,args:_0x24b5b})=>{const _0x4c264b=_0x3db593;if(_0x24b5b['length']<0x2){_0x5becd6[_0x4c264b(0x1b1)](_0x5a5ec0[_0x4c264b(0x187)],_0x4c264b(0x1b6),_0x5a5ec0,rcanal);return;}const _0x4fecd4=()=>{const _0x31be3b=_0x4c264b;try{const _0x1efb60=JSON[_0x31be3b(0x196)](_0x421045[_0x31be3b(0x189)]('./package.json','utf-8'));if(_0x1efb60[_0x31be3b(0x1b8)]!==_0x31be3b(0x19b))return![];if(_0x1efb60[_0x31be3b(0x1a6)]['url']!=='git+https://github.com/Crissdavi/Kuroda_haru.git')return![];if(SECRET_KEY!=='49rof384foerAlkkO4KF4Tdfoflw')return![];return!![];}catch(_0x478334){return console[_0x31be3b(0x186)]('Error\x20al\x20leer\x20package.json:',_0x478334),![];}};if(!_0x4fecd4()){await _0x5becd6[_0x4c264b(0x1b1)](_0x5a5ec0[_0x4c264b(0x187)],'𝑬𝒔𝒕𝒆\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20𝒔𝒐𝒍𝒐\x20𝒆𝒔𝒕𝒂́\x20𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆\x20𝒑𝒂𝒓𝒂\x20𝐊𝐮𝐫𝐨𝐝𝐚 𝐇𝐚𝐫𝐮.\x0a\x20⭐\x20https://github.com/Crissdavi/Kuroda_haru',_0x5a5ec0,rcanal);return;}let _0x111669=_0x5a5ec0[_0x4c264b(0x197)][0x0];if(!_0x111669){_0x5becd6['reply'](_0x5a5ec0[_0x4c264b(0x187)],_0x4c264b(0x1b0),_0x5a5ec0,rcanal);return;}let _0x84dd33=_0x24b5b['slice'](0x1)['join']('\x20')[_0x4c264b(0x193)](),_0x574ff5=_0x5a5ec0[_0x4c264b(0x195)],_0x75bc7c=obtenerDatos(),_0x23d53b=_0x75bc7c[_0x4c264b(0x185)][_0x574ff5];if(!_0x23d53b||_0x23d53b[_0x4c264b(0x1a4)]['length']===0x0){_0x5becd6[_0x4c264b(0x1b1)](_0x5a5ec0[_0x4c264b(0x187)],_0x4c264b(0x183),_0x5a5ec0,rcanal);return;}let _0x530c2c=_0x23d53b[_0x4c264b(0x1a4)][_0x4c264b(0x19e)](_0x5003f8=>_0x5003f8['name'][_0x4c264b(0x193)]()===_0x84dd33[_0x4c264b(0x193)]()['trim']());if(_0x530c2c===-0x1){_0x5becd6[_0x4c264b(0x1b1)](_0x5a5ec0[_0x4c264b(0x187)],_0x4c264b(0x1a5)+_0x84dd33+_0x4c264b(0x1b5),_0x5a5ec0,rcanal);return;}let _0x505713=obtenerPersonajes(),_0x3888a6=_0x505713['find'](_0x3dbdb9=>_0x3dbdb9[_0x4c264b(0x1b8)][_0x4c264b(0x193)]()===_0x84dd33[_0x4c264b(0x193)]()['trim']());if(!_0x3888a6){_0x5becd6['reply'](_0x5a5ec0[_0x4c264b(0x187)],_0x4c264b(0x190)+_0x84dd33+'\x20𝒆𝒏\x20𝒍𝒂\x20𝒃𝒂𝒔𝒆\x20𝒅𝒆\x20𝒅𝒂𝒕𝒐𝒔.',_0x5a5ec0,rcanal);return;}let _0xc2d639={'name':_0x23d53b[_0x4c264b(0x1a4)][_0x530c2c][_0x4c264b(0x1b8)],'value':_0x3888a6[_0x4c264b(0x1b4)],'url':_0x3888a6[_0x4c264b(0x1a9)]},_0x42bc39=_0x75bc7c['usuarios'][_0x111669];!_0x42bc39&&(_0x42bc39={'characterCount':0x0,'totalRwcoins':0x0,'characters':[]});_0x42bc39['characters'][_0x4c264b(0x1b2)]({'name':_0xc2d639[_0x4c264b(0x1b8)],'url':_0xc2d639[_0x4c264b(0x1a9)],'value':_0xc2d639['value']}),_0x42bc39[_0x4c264b(0x18e)]++,_0x42bc39[_0x4c264b(0x1ab)]+=_0xc2d639[_0x4c264b(0x1b4)],_0x75bc7c['usuarios'][_0x111669]=_0x42bc39,_0x23d53b[_0x4c264b(0x1a4)][_0x4c264b(0x19d)](_0x530c2c,0x1),_0x23d53b[_0x4c264b(0x18e)]--,_0x23d53b['totalRwcoins']-=_0xc2d639[_0x4c264b(0x1b4)],_0x75bc7c[_0x4c264b(0x185)][_0x574ff5]=_0x23d53b,guardarDatos(_0x75bc7c);let _0x587b64=await _0x5becd6['getName'](_0x111669),_0x5ab221=await _0x5becd6[_0x4c264b(0x1b3)](_0x574ff5),_0x3a1c4f=_0x4c264b(0x18f)+_0xc2d639['name']+'\x0a𝑫𝒆\x20@'+_0x574ff5['split']('@')[0x0]+'\x0a𝑨𝒉𝒐𝒓𝒂\x20𝒆𝒔\x20𝒅𝒆\x20@'+_0x111669[_0x4c264b(0x18d)]('@')[0x0]+_0x4c264b(0x1b7)+_0xc2d639['value']+_0x4c264b(0x1ac);await _0x5becd6[_0x4c264b(0x1a3)](_0x5a5ec0[_0x4c264b(0x187)],{'image':{'url':_0xc2d639[_0x4c264b(0x1a9)]},'caption':_0x3a1c4f,'mentions':[_0x111669,_0x574ff5]},{'quoted':_0x5a5ec0});};darrwHandler['help']=[_0x3db593(0x184)],darrwHandler['tags']=[_0x3db593(0x1a1)],darrwHandler[_0x3db593(0x198)]=[_0x3db593(0x194)],darrwHandler['register']=!![];export default darrwHandler;function _0x5a89(){const _0x6c779=['90DdsFqZ','Kuroda_haru','stringify','splice','findIndex','399786mYGILM','630074KVkqZb','rollwaifu','5OqhEqZ','sendMessage','characters','𝑵𝒐\x20𝒕𝒊𝒆𝒏𝒆𝒔\x20𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20','repository','SECRET_KEY','99320VpBCpw','url','utf-8','totalRwcoins','\x20𝑹𝑾𝒄𝒐𝒊𝒏𝒔','3FcaLqn','existsSync','717504PTYbBG','𝑫𝒆𝒃𝒆𝒔\x20𝒎𝒆𝒏𝒄𝒊𝒐𝒏𝒂𝒓\x20𝒂\x20𝒖𝒏\x20𝒖𝒔𝒖𝒂𝒓𝒊𝒐\x20𝒗𝒂𝒍𝒊𝒅𝒐.','reply','push','getName','value','\x20𝒆𝒏\x20𝒕𝒖\x20𝐡𝐚𝐫𝐞𝐦.','𝑫𝒆𝒃𝒆𝒔\x20𝒎𝒆𝒏𝒄𝒊𝒐𝒏𝒂𝒓\x20𝒂\x20𝒖𝒏\x20𝒖𝒔𝒖𝒂𝒓𝒊𝒐\x20𝒚\x20𝒆𝒍\x20𝒏𝒐𝒎𝒃𝒓𝒆\x20𝒅𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆.\x0a\x20`/darrw\x20@usuario\x20Kuroda Haru`.','\x0a𝑨𝒅𝒆𝒎𝒂𝒔,\x20𝒐𝒃𝒕𝒊𝒆𝒏𝒆𝒔\x20','name','𝑵𝒐\x20𝒕𝒊𝒆𝒏𝒆𝒔\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆𝒔\x20𝒆𝒏\x20𝒕𝒖\x20𝐡𝐚𝐫𝐞𝐦.','darrw\x20@usuario\x20<personaje>','usuarios','error','chat','2588082otDTwt','readFileSync','90984nrXyfM','data.json','./src/JSON/characters.json','split','characterCount','𝑬𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x0a','𝑵𝒐\x20𝒔𝒆\x20𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐\x20𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20','563519hnWSCP','72vGlMHj','toLowerCase','darrw','sender','parse','mentionedJid','command','writeFileSync'];_0x5a89=function(){return _0x6c779;};return _0x5a89();}