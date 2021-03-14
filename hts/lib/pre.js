//args='-m assets/suvak3.htsvoice -u 0.2 -g 1 -ow assets/0.wav assets/0.lab'.split(' ')
//Module.arguments=args
transliterate={
            "क":"k", "ख":"kh", "ग":"g", "घ":"gh", "ङ":"N1", "च":"c", "छ":"ch", "ज":"j", "झ":"jh", "ञ":"N2", "ट":"T", "ठ":"Th", "ड":"D", "ढ":"Dh", "ण":"N3", "त":"t", "थ":"th", "द":"d", "ध":"dh", "न":"n", "प":"p", "फ":"ph", "ब":"b", "भ":"bh", "म":"m", "य":"y", "र":"r", "ल":"l", "ळ":"L", "व":"v", "श":"s1", "ष":"s2", "स":"s", "ह":"h", "ं":"M", "ः":"H", "अ":"a", "आ":"A", "इ":"i", "ई":"I", "उ":"u", "ऊ":"U", "ऋ":"R", "ॠ":"R", "ऌ":"l1", "ॡ":"l2", "ए":"e", "ऐ":"ai", "ओ":"o", "औ":"au", "लँ":"ln"
        }
function len(x)
{return x.length}
function varnzanirnzayah(word)
{
        s=word
        //shabdah=[]
        //for i in s:
        //    shabdah.push(i.encode('utf-8'))
        shabdah=word
        varnzaah=[]
        svrah=[]
        svrahL=[]
        svrahR=[]
        svrh=2
        for (i=0;i<shabdah.length;i++)
        {
            //console.log(shabdah[i])
            if('कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह'.includes(shabdah[i]))
            {
            	//console.log('c1')
                if(len(shabdah)==i+1){
                    varnzaah=varnzaah.concat([shabdah[i],'अ'])
                    svrah=svrah.concat([3,svrh])
                }
                else if(shabdah[i+1] == '्'){
                    varnzaah=varnzaah.concat([shabdah[i]])
                    svrah=svrah.concat([3])
                    }
                else if('ा ि ी ु ू ृ ॄ ॢ ॣ े ै ो ौ'.split(' ').includes(shabdah[i+1])){
                    varnzaah=varnzaah.concat([shabdah[i],'आइईउऊऋॠऌॡएऐओऔ'['ा ि ी ु ू ृ ॄ ॢ ॣ े ै ो ौ'.split(' ').indexOf(shabdah[i+1])]])
                    svrah=svrah.concat([3,svrh])
                   	}
                else{
                    varnzaah=varnzaah.concat([shabdah[i],'अ'])
                    svrah=svrah.concat([3,svrh])
                    }
            }
            else if('अआइईउऊऋॠऌॡएऐओऔ'.includes(shabdah[i] )){
            	//console.log('c2')
                varnzaah=varnzaah.concat([shabdah[i]])
                svrah=svrah.concat([svrh])
                }
            else if(('ं'+'ः').includes(shabdah[i])){
            	//console.log('c3')
            	varnzaah=varnzaah.concat([shabdah[i]])
            	svrah=svrah.concat([3])
            	}
            else if (shabdah[i] == 'ँ'){
            	//console.log('c3')
                nop}
                //varnzaah[-1]+='ँ'
            else if(shabdah[i]=='॒'){
            	//console.log('c4')
                svrh=2
                for (j =len(varnzaah)-1;j>-1;j--){
                	if('अआइईउऊऋॠऌॡएऐओऔ'.includes(varnzaah[j] )){
                		svrah[j]=0;break;
                		}
                	}
                }
            else if(shabdah[i]=='॑'){
            	//console.log('c5')
            			svrh=0
            			for (j =len(varnzaah)-1;j>-1;j--){
                	if('अआइईउऊऋॠऌॡएऐओऔ'.includes(varnzaah[j] )){
                		svrah[j]=1;break;
                		}
                	}
            		}
        //console.log(varnzaah) 
        }
        //console.log(varnzaah) 
        u=false
        for (i=0;i<len(svrah);i++){
        	if (svrah[i]==0)u=false
        	if (svrah[i]==2)u=true
        	if (svrah[i]==1 && u)svrah[i]=0
        }
        vrnah=['sil']
        dvitv=[false]
        svrah2=[3]
        for(i=0;i<len(varnzaah);i++){
            //if varnzaah[i]=="ऐ":vrnah+=['a','i']
            //else if varnzaah[i]=="औ":vrnah+=['a','u']
            //else:
            vrnah.push(transliterate[varnzaah[i]])
            dvitv.push(false)
            svrah2.push(svrah[i])
            if(varnzaah[i]=='ॠ'){
            	vrnah.push('R')
            	dvitv.push(false)
            	svrah2.push(svrah[i])
            }
            
            //if varnzaah[i] in 'आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ'.split(' ') and i+1<len(varnzaah):
            //	if varnzaah[i+1] in 'आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ'.split(' '):vrnah.push('X')
            //if transliterate[varnzaah[i]][0] in ['k','g','c','j','T','D','t','d','p','b'] and (i+1)<len(varnzaah):
            //	vrnah[-1]=transliterate[varnzaah[i]][0]
            //	if transliterate[varnzaah[i+1]][0]!=transliterate[varnzaah[i]][0]:vrnah.push(transliterate[varnzaah[i]]+'x')
            //console.log(varnzaah[i])
            //console.log(transliterate[varnzaah[i]])
            //console.log('thisis')
            if (['k','g','c','j','T','D','t','d','p','b'].includes(transliterate[varnzaah[i]][0] )&& i>0){
            	if (transliterate[varnzaah[i-1]][0]==transliterate[varnzaah[i]][0]){
            		vrnah.pop(-2)
            		dvitv.pop(-2)
            		svrah2.pop(-2)
            		//vrnah[-1]=vrnah[-1]+'x2'
            		dvitv[-1]=true
            	}
            }
            if(transliterate[varnzaah[i]]=='H' && (i+1)<len(varnzaah)){
            	if(transliterate[varnzaah[i+1]][0]=='s')vrnah[-1]=transliterate[varnzaah[i+1]]
            	if(transliterate[varnzaah[i+1]][0]=='p')vrnah[-1]='f'
            }
            if('y r l L v s1 s2 s h N1 N2 N3 n m'.split(' ').includes(vrnah[-1] ) && i>0){
            	if(vrnah[-2]==vrnah[-1]){
            		vrnah.pop(-2)
            		dvitv.pop(-2)
            		svrah2.pop(-2)
            		//vrnah[-1]=vrnah[-1]+'x2'
            		dvitv[-1]=true
            	}
            }
        }
        vrnah=vrnah.concat(['sil'])
        dvitv.push(false)
        svrah2=svrah2.concat([3])
        svrah=svrah2
        for (i=0;i<len(vrnah);i++){
            if(svrah[i]==0){
                svrh=0
                break
              }
            else if (svrah[i]==1 || svrah[i]==2)
            {
                svrh=2
                break
            }
        }
        for (i=0;i<len(vrnah);i++){
            svrahL.push(svrh)
            if(svrah[i]!=3){
                svrh=svrah[i]
                for (j=i-1;j>-1;j--){
                    svrahR[j]=svrah[i]
                    if (svrah[j]!=3)break
                }
            }
            if(svrh==2)svrahR.push(2)
            else svrahR.push(0)
        }
        return [vrnah,dvitv,svrah,svrahL,svrahR]
}
function str(x){return x.toString()}
function labeller(d){
	arr=varnzanirnzayah(d)
	vrnah=arr[0],dvitv=arr[1],svrah=arr[2],svrahL=arr[3],svrahR=arr[4]
	svrah=svrah.map((a)=>{return {0:'A',2:'U',1:'S',3:'V'}[a]})
	svrahR=svrahR.map((a)=>{return {0:'A',2:'U',1:'S',3:'V'}[a]})
	svrahL=svrahL.map((a)=>{return {0:'A',2:'U',1:'S',3:'V'}[a]})
	lab=""
	mono=""
	if(len(vrnah)==0)return lab
	for(krmh=0;krmh<len(vrnah);krmh++){
		lab+='-'+vrnah[krmh]+'+/'
		for( upkrmh=krmh-2;upkrmh<krmh+3;upkrmh++){
			lab+=str(upkrmh-krmh+2)+':'
			if(upkrmh>=0 && upkrmh<len(vrnah))
				lab+=vrnah[upkrmh]
			else lab+='_NA_'
			lab+='/'
		}
		for( upkrmh=krmh-2;upkrmh<krmh+3;upkrmh++){
			lab+=str(upkrmh-krmh+2+5)+':'
			if(upkrmh>=0 && upkrmh<len(vrnah))
				lab+=dvitv[upkrmh]?'x':'O'
			else lab+='O'
			lab+='/'
		}
		j=13
		svrsuci=[svrah,svrahL,svrahR]
		//console.log(svrsuci)
		svrsuci.forEach(pdy=>{
			lab+=str(j)+':'
			lab+=pdy[krmh]
			lab+='/'
			j+=1
			}
		)
		mono+=vrnah[krmh]+'\n'
		lab+='\n'
	}
	console.log(vrnah)
	console.log(svrah)
	return [len(vrnah),lab,svrah,svrahL,svrahR]
}

convertUint8ArrayToBinaryString =function(u8Array) {
	var i, len = u8Array.length, b_str = "";
	for (i=0; i<len; i++) {
		b_str += String.fromCharCode(u8Array[i]);
	}
	return b_str;
};
suvagarmbh=function(prtikrm) {
	window.hts_prtikrm=function()
	{
		Module.ccall('hts_armbh',null,['string'],['assets/suvak.htsvoice']);
		prtikrm()
	}
	if(window.hts==='1')
	{
		window.hts_prtikrm()
	}
};
suvacnm=function(vakym) {
	arr=labeller(vakym)
	var purvanvh=0
	var vrnanvh=0;
	var vrnkrmh=-1
	var anukalh=Module.ccall('hts_anukalh','double',[],[])
	FS.writeFile('assets/0.lab',arr[1])
	var fp=addFunction(function (f){
		if(f>vrnanvh+purvanvh||vrnkrmh<0)
		{
			vrnkrmh+=1;
			//console.log(vrnkrmh)
			console.log(arr[2][vrnkrmh])
			purvanvh+=vrnanvh
			vrnanvh=Module.ccall('hts_vrnanvh','number',['number'],[vrnkrmh])
		}
		let us=4.9,as=4.5
		//return us
		if(arr[2][vrnkrmh]=='A')return as;
		else if(arr[2][vrnkrmh]=='U')return us;
		else if(arr[2][vrnkrmh]=='S')
		{
			if((f-purvanvh)*anukalh<0.06)return us+(as-us)*(f-purvanvh)*anukalh/0.06
			else return as
		}
		else if(arr[2][vrnkrmh]=='V')
		{
			let p1=arr[3][vrnkrmh]=='A'||arr[3][vrnkrmh]=='S'?as:us;
			let p2=p1;
			if(vrnkrmh<svrah.length)if(svrah[vrnkrmh+1]!='V')
				p2=arr[4][vrnkrmh]=='U'||arr[4][vrnkrmh]=='S'?us:as;
			if(p1!=p2)return p1+(p2-p1)*(f-purvanvh)/vrnanvh
			else return p1
		}
		return as
	},'di')
	Module.ccall('hts_vacnm',null,['string','string','number'],['assets/0.lab','assets/0.wav',fp])
	removeFunction(fp)
	var snd=new Audio('data:audio/wav;base64,' + btoa(convertUint8ArrayToBinaryString(FS.readFile('assets/0.wav'))))
	snd.play()
};
