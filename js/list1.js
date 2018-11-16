var global=global||{}   //存储为全局变量
console.log(global)
$(function(){
    //pagestart  页数  pagesize  每页的条数  count 总条数
	$(".more_btn").click(function(){
		pageStart++
		if(pageStart<global.page){
			getList()
		}else{
			$(".more_btn").hide()
			$('.list-more').hide()
		}
		
	})
	//跳转详情页  
	$("#articleList").delegate(".content_one","click",function(){
		var articleId=$(this).attr("articleid")  
		window.location="article.html?articleId=xiaoniaoNews"+articleId
	})
   getList()
})
var pageStart=0   //页数
function getList(){

	//  $.ajax({
	// 	 url:"1.json",
	// 	 type:"get",
	// 	 async:false,
	// 	 dataType:"json",
	//      data:{

	// 	 },
	//  }).done(function(result){
          // pageStart:1  从一开始,前端传得是页数
					
					
	//  })
	//  console.log(listData)
	 var result=listData["listData0"+pageStart]
	 global.count=result.data.count
	 var pageSize=result.data.pageSize
	 var list=result.data.list
	 if(pageStart==0){
		 $("#articleList").html("")
	 }
	 console.log(result)
	 for(var i=0;i<list.length;i++){
		 // 拿到模板里的所有结点 li标签里不能放diiv
		 var htmlmodel=$("#itemHtml").html()
		 htmlmodel=htmlmodel.replace("$articleId$",list[i].sysId)
		 htmlmodel=htmlmodel.replace("img/article_iflike.png",list[i].coverImg)
		 htmlmodel=htmlmodel.replace("$articleTitle$",list[i].title)
		 htmlmodel=htmlmodel.replace("$updateTime$",list[i].creatAt)
		 htmlmodel=htmlmodel.replace("$describe$",list[i].describe)
		 $("#articleList").append(htmlmodel)
		}
		
		global.page=Math.ceil(global.count/pageSize)
		
		
}
 