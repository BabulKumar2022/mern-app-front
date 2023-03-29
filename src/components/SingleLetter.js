import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import './SingleLetter.css'
import logo  from'../images/logo.jpg'


const SingleLetter = ({item, index}) => {
    const {name, fatherName, village, post, upozila, zila, isuDate, meserDate, lastDate, ac, pfValue}= item;


    const ref = useRef();



const deleteProduct2 = async(id)=>{
    console.log(id)
    let result = await fetch(`http://localhost:5000/products2/${id}`,{
      method: "DELETE"
    });
    result = await result.json();
    if(result){
      alert("Are You sure? want One product delete");
    
    }
};

  return (
    <div className='print' >

        <ul key={item._id}>
            <div ref={ref} className='letter-area'>
                <div className='header-area'>
                    <div className='letter-logo'>
                       <img className='logo2' src={logo} alt=''/> 
                    </div>
                    <div className='header-text'>
                      <h1>মাদারীপুর পল্লী বিদ্যুৎ সমিতি</h1>
                      <h3>শিবচর জোনাল অফিস</h3>
                      <h4>শিবচর, মাদারীপুর।</h4>
                      <p>Email:shibcharzo@gmailcom,web:madaripurpbs.gov.bd</p>
                    </div>
                </div>
<div className='line'></div>
                <di  className="sasokno">
                <p>স্মারক নং - ২৭.১২.৫৪৮৭.৫২৭.০৫.০৭৮.২০২৩/                   </p> 
                <p> তারিখঃ {isuDate}</p>
                </di>
 
                <div className='name-address'>
                  <p>নামঃ {name}</p>
                  <p>পিতার নামঃ {fatherName}</p>
                  <p>গ্রামঃ {village} <span>ডাকঘরঃ {post}</span></p>
                  <p>উপজেলাঃ {upozila} <span>জেলাঃ {zila}</span></p>
                  <p>মোবাইল নম্বরঃ {}</p>
                </div>
                <div className='subject'>
                  <p>বিষয়ঃ শিল্প প্রতিষ্ঠানে অটো পি এফ আই ইউনিট স্থাপন ও পাওয়ার ফ্যাক্টর মান  উন্নতি করণ প্রসঙ্গে ।</p>
                </div>
                <div className='letter-body'>
                    <p> উপরোক্ত বিষয়ে আপনাকে জানানো যাচ্ছে যে, গত {meserDate}-ইং তারিখে আপনার শিল্প প্রতিষ্ঠানের বিদ্যূৎ 
                      সংযোগ স্থলে পাওয়ার ফ্যাক্টর মান {pfValue} % পাওয়া যায়। যাহা নির্ধারিত মানের চেয়ে {95 - pfValue} % কম।পাওয়ার
                      ফ্যাক্টর মান নির্দিষ্ট মানের চেয়ে কম থাকলে বৈদ্যুতিক লাইনের সিস্চেম লস বৃদ্ধি পায়, মোটর ও সকল
                      ধরনের বৈদ্যুতিক যন্তপাতি গরম হয়ে নস্ট হওয়ার সম্ভাবনা থাকে, বিল বেশী হয় এবং এবনং বিতরন
                       লাইন ও ট্রান্সফরমার নস্ট হওয়ার ঝুকি বেড়ে যায়  । </p>
                    <p>এমতাবস্থায় আপনার শিল্প প্রতিষ্ঠানের বৈদুতিক যন্ত্রপাতি ক্ষতি হওয়া থেকে রক্ষা ও সঠিক ব্যবহার
                         নিস্চিত করা এবং বিতরন সিস্টেম কে ঝুঁকি মুক্ত করার লক্ষে আপনার ---কিঃওঃ লোডের জন্য প্রয়োজনীয় 
                         সাবজের অটো পিএফআই স্থাপন পূ্র্বক ক্রয়ের মেমো সংযুক্ত করে আগামী {lastDate}ইং তারিখের মধ্যে লিখিত 
                         ভাবে সমিতিকে অবহিত করার জন্য অনুরোধ করা হলো ।</p>
                    <p>অন্যথায় পাওয়ার ফ্যাক্টর মাশুল আনার বিদ্যুৎ বিলের সাথে অরিক্ত জমিানা বিল পরিশোধ করতে হবে। 
                          এ বিষয়ে আর কোন নোটিশ প্রদান বা পত্র প্রেরন করা হবে না</p>
                    <h4>’’বিষয়টি অতীব জরুরী”</h4>
                </div>
                <div className='letter-foter'>
                  <div className='onulipi'> 
                    <p>অনুলিপিঃ-</p>
                    <p>১। গ্রাহক নথি, হিসাব নং-{ac}</p>
                    <p>২। অফিস কপি</p>
                  </div>
                  <div className='dgm-name'>
                    <p>(মোঃ মনজুরুল আলম)</p>
                    <p>ডেপুটি জেনারেল ম্যনেজার</p>

                  </div>
                </div>
            </div>
                <li><ReactToPrint trigger={()=> <button>Print</button>} 
                content={()=> ref.current}
                /></li> 
                <li><button onClick={()=> deleteProduct2(item._id)}>Delete</button></li>
        </ul>
    </div>
  )
}

export default SingleLetter