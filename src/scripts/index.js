

console.log('inExt')
function rSC(data){
	//the objective it to replace any special characters which might conflict with JS within a string
	//console.log('rsc receiving::',data);
		data=data.replaceAll(/\’/g,"")
			.replaceAll(/\‘/g,"")
			.replaceAll(/\”/g,"")
			.replaceAll(/\“/g,"")
			.replaceAll(/\"/g,"")
			.replaceAll(/\'/g,"")
			.replaceAll(/\•/g,"")
			.replaceAll(/\¥/g,"")
			.replaceAll(/\€/g,"")
			.replaceAll(/\£/g,"")
			.replaceAll(/\`/g,"");

	 // console.log('rsc returning::',data);
		return data;
};
function formatText(data){
    //console.log('formatText::',data);
    //real basic formating. adds <br> after a period unless there is a number before it!
    var tmpSF = data.split("");
    var tmpST = '';

    if (tmpSF.length > 0){
      for (var i = 0; i < tmpSF.length; i++) {
      //const x = tmpSF[i].toLowerCase().match('.');
      if (tmpSF[i] === '.'){//formating on period
          if (i>0&&i<tmpSF.length-1){
            if (!isNaN(tmpSF[i-1])||tmpSF[i*1+1]!==' '){//number before so skip the break!
              tmpST += tmpSF[i];
            }else{
              //just do it
              tmpST += tmpSF[i]+'<BR>';
            };
          }else{
            //first letter, just do it
            tmpST += tmpSF[i];
          };
      }else{
        //first letter, just do it
        tmpST += tmpSF[i];
      };
    };
  };

    return tmpST;
};
