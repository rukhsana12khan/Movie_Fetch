let name=document.getElementById('na')
let year=document.getElementById('ye')
let direc=document.getElementById('dir')
let langu=document.getElementById('lan')


let but=document.getElementById('btn');
but.addEventListener('click', function(){
	let int=document.querySelector('input').value;
	
	
	

	const xhr =new XMLHttpRequest();
	xhr.open('GET',`http://www.omdbapi.com/?t=${int}&apikey=a9399a17`,true);
	
	
	xhr.onload=function(){
	    let a=JSON.parse(xhr.responseText)
	    na.innerHTML='movie name  =  '+a.Title;
	    year.innerHTML='year  =  '+a.Year;
	    direc.innerHTML='Director  = '+a.Director;
	    langu.innerHTML='Language  = '+a.Language;
	  

	    
	 }
		
	xhr.send();
})
