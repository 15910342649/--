$(function(){
	var id=getParams("articleId")
	// var articleData=articleData[id].typeTitle
	console.log(articleData[id].data)
	$('.titleitem').html(articleData[id].data.title)
	$('.cont').html(articleData[id].data.content)
	$('.img_wrap').append(`<img src='${articleData[id].data.coverImg}'/>`)

	//search ?  hash #   article.html?articleId=3&name=22&

})

	

function getParams(type){
   var reg=new RegExp("(^|&)"+type+"=([^|&]*)(&|$)")
   //substring 从开始匹配到结束 和substr 截取的长度
   var value=window.location.search.substring(1).match(reg)
  //test  match  exec
   if(value==null){
      return null
   }else{
     return  value[2]  //value[1]匹配得是&符号 value[2]
   }
  
         
}
   