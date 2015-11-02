//Change entire text to either Heb_or_Transliteration or Eng_or_AHL
function changeChapterLang(idElement){
  //switch between Heb and Transliteration or Eng and AHL

	//Change all text to either Hebrew or Transliteration
  if( idElement == 1){
      document.getElementById('divNum_1_1_7_1L1').innerHTML ="בְּרֵאשִׁית";
      document.getElementById('divNum_1_1_7_1L1').innerHTML ="בְּרֵאשִׁית";
      document.getElementById('divNum_1_1_7_1L1').innerHTML ="בְּרֵאשִׁית";
	return false;}
	//Change all text to either English or AHL
  if( idElement == 2){
      document.getElementById('divNum_1_1_7_1L1').innerHTML ="בְּרֵאשִׁית";
      document.getElementById('divNum_1_1_7_1L1').innerHTML ="בְּרֵאשִׁית";
      document.getElementById('divNum_1_1_7_1L1').innerHTML ="בְּרֵאשִׁית";
	return false;}

}//endchangeChapterLang

//functionName_cahpter_verse_line
switch_Heb_Translit_1_7_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_1_1_7').innerHTML == "bê'rey'shit"){
      document.getElementById('divNum_1_1_7_1L1').innerHTML ='בְּרֵאשִׁית';
    if( idElement == 1  &&  document.getElementById('divNum_1_1_7').innerHTML == "bê'rey'shit"){
      document.getElementById('divNum_1_1_7_1L1').innerHTML ='בְּרֵאשִׁית';

} //End of switch_Heb_Translit_1_7_1function

//functionName_cahpter_verse_line
switch_Eng_AHL_1_7_1(idElement){

	//1_AHL-->ENG 2_ENG_AHL
    if( idElement == 1  &&  document.getElementById('divNum_1_1_7').innerHTML == "bê'rey'shit"){
      document.getElementById('divNum_1_1_7_1L1').innerHTML ='בְּרֵאשִׁית';
    if( idElement == 1  &&  document.getElementById('divNum_1_1_7').innerHTML == "bê'rey'shit"){
      document.getElementById('divNum_1_1_7_1L1').innerHTML ='בְּרֵאשִׁית';

} //End of switch_Eng_AHL_1_7_1function

