// $('#start').on('click', function(){

//     $('#start').html('ストップ');
//     $('body').addClass('top');
// });

// document.querySelector('#start').addEventListener('click', function(){

//     document.querySelector('#start').innerHTML = 'ストップ';
//     document.querySelector('body').classList.add('top');
//     document.querySelector('body').classList.remove('top');
// });

// for(var i=0; i++; i<=40){
//     $('.seat').html('i')

// }




// for(let i=0; i<=40; i++){
//     let div = '<div class ="seat">i</div>';
//     document.querySelector('#app').innerHTML= div;
// };

// 

let personAry=[];

for( let n= 1; n<=50; n++){
personAry.push(n);
// const randomNumber= Math.ceil(Math.random()*(personAry.length-1));
}



//欠席を抜く
const array = [0, 1, 2, 3, 4];
console.log(`before: array = ${array}`);

const newArray = array.filter(n => n !== 1);

console.log(`after: array = ${newArray}`);




//ここからルーレットスタート
document.getElementById("start").onclick = function() {
    
var count = 0;

var countup = function(){
    count++;

    console.log(personAry);

   
      
    
    const shuffleArray = function(){
        for( var i = personAry.length - 1; i>0; i--){
            const r = Math.floor(Math.random()*(i+1));
            const tmp = personAry[i];
            personAry[i]= personAry[r];
            personAry[r]=tmp;
        }

    };

    shuffleArray();


    let div='';

    //forEach(function(data, i){})
    //[3,2,1,5,4]
    //alert(data, i)


    const updateTable = function(){
        let div ='';

        personAry.forEach(function(data, i){
            if((i+1) % 6 == 0){
                div += '<div class ="seat">'+data+'</div></div>';  

            }else if ((i+1) % 6 == 1){
                div += '<div class="table-item text-center"><div class ="seat">'+data+'</div>'; 

            }else{
                div += '<div class ="seat">'+data+'</div>'; 
                // const randomNumber= Math.ceil(Math.random()*(numbers.length-1));
                // div += '<div class ="seat">'+i+'</div>'; 
                // basetag += '<div>'+numbers[randomNumber]+'</div>';
                // numbers.splice(randomNumber,1);
            }
    
        });

    
    document.querySelector('#app').innerHTML= div;
    };
    updateTable();

    var id = setTimeout(countup, 20);
      if(count > 20){
        clearTimeout(id);//idをclearTimeoutで指定している
      }
    }
    
    countup(); 
    
};

//なるべく表示が変わる部分が少なくすること
//表示したいデータを作って(変数div)
//それを実際に表示する

// document.querySelector('#start').addEventListener('click', updateTable);


function sound()
{
	// [ID:sound-file]の音声ファイルを再生[play()]する
	document.getElementById( 'sound-file' ).play() ;
}