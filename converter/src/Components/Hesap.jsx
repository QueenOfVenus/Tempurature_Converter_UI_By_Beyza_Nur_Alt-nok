/* eslint-disable no-unused-vars */
//rfce
import React from 'react'
import { useState } from 'react';

//Yapmaya çalıştım 3 input üzerinden dönüşümlü olarak değer değişimi gerçekleştirmekti. 
//Hangi inputa değer girersem diğer ikisinde hesaplanmış değer almayı planladım.
//Sitenin arkasındaki art tasarımı da benim çizimimdir. :)
//ChatGPT'den de yapmaya çalıştıklarımı anlamlandırmaya çalışırken ve mantığını oturtmaya 
//çalışma aşamasında olduğum için yardım aldım. 
//Arkadaşım da takıldığım yerlerde yardımcı oldu :) <3

function HESAP() {

  //inputtan çekeceğım değerleri useState olarak tanımladım.
    const [celsius , setCelsius] = useState('');
    const [fahrenheit , setFahrenheit] = useState('');
    const [kelvin , setKelvin] = useState('');

    
  //handleTemperatureChange fonksiyonu unit ile dönüştüreceğim hangi birime ait veri girdiğimi inceliyor.
  //e yani event ifadesini App.jsx de inputların içini bağlamak için kullanacağız. 
  //isNaN inputValue içerisindeki değerin sayısal bir değer olup olmadığını kontrol ediyor.  
  //Bu fonksiyonun içinde dönüşüm de yapacağız.
  const handleTemperatureChange = (e, unit) => { // Sıcaklık değişimini ele alan genel fonksiyon
    const value = e.target.value; // Input değeri

    if (isNaN(value)) { // Eğer girdi bir sayı değilse
      setCelsius(''); // Tüm değerleri sıfırla
      setFahrenheit('');
      setKelvin('');
      return;
    }

    let c = ''; // Geçici Celsius değeri
    let f = ''; // Geçici Fahrenheit değeri
    let k = ''; // Geçici Kelvin değeri

    switch (unit) { // Ölçek türüne göre dönüşüm yap
      case 'celsius':
        c = parseFloat(value); // Girdiyi ondalık sayıya dönüştür
        f = (c * 9/5) + 32; // Celsius'i Fahrenheit'e dönüştür
        k = c + 273.15; // Celsius'i Kelvin'e dönüştür
        break;
      case 'fahrenheit':
        f = parseFloat(value); // Girdiyi ondalık sayıya dönüştür
        c = (f - 32) * 5/9; // Fahrenheit'i Celsius'e dönüştür
        k = (f - 32) * 5/9 + 273.15; // Fahrenheit'i Kelvin'e dönüştür
        break;
      case 'kelvin':
        k = parseFloat(value); // Girdiyi ondalık sayıya dönüştür
        c = k - 273.15; // Kelvin'i Celsius'e dönüştür
        f = (k - 273.15) * 9/5 + 32; // Kelvin'i Fahrenheit'e dönüştür
        break;
      default:
        break;
    }

    // Yeni değerleri ayarla
    setCelsius(c.toString()); // Celsius'i string'e dönüştürüp ayarla
    setFahrenheit(f.toString()); // Fahrenheit'i string'e dönüştürüp ayarla
    setKelvin(k.toString()); // Kelvin'i string'e dönüştürüp ayarla



  };


    //Herşeyi resetlemek için botunun fonksiyonu
    const handleReset = () => {
      // Tüm state'leri sıfırla
      setCelsius('');
      setFahrenheit('');
      setKelvin('');
    };

    //Sonuç olarak değerleri aktif şekilde input içine yolladım. 
    //Bende sonuçları label üzerine yazdırarak test ettim. 
    
  return (

    <div className='convert'>
            <form action="">
              <label > Celsius : (C°) </label>
              <input 
                  className='c' 
                  type="text" 
                  value={celsius} 
                  onChange={(e) => handleTemperatureChange(e, 'celsius')} 
                  placeholder='Please Enter Value in Celsius (C°)...'/>
              
              <label > Fahrenheit : (F°) </label>
              <input 
                  className='f' 
                  type="text" 
                  value={fahrenheit} 
                  onChange={(e) => handleTemperatureChange(e, 'fahrenheit')} 
                  placeholder='Fahrenheit (F°) value is here...'/>
              
              <label > Kelvin : (K°) </label>
              <input 
                  className='k' 
                  type="text" 
                  value={kelvin} 
                  onChange={(e) => handleTemperatureChange(e, 'kelvin')}
                  placeholder='Kelvin (K°) value is here...'/>
              
              <button onClick={handleReset}>Reset Now..!</button>

            
                <h3> C° Değeri : {celsius} </h3>
                <h3> F° Değeri : {fahrenheit}</h3>
                <h3> K° Değeri : {kelvin}</h3>
              

              
              
            </form>

          </div>

          
  )
}


export default HESAP;



    