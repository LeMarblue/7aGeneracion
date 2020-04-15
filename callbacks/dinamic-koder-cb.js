 const koder={
   haLlamado:false,
   fueEntrevistado: false,
   haReservado: false,
   tomoPrimeraClase:false
 }


 function callToKodemia(alumno, callback){
   console.log('llamando...')
   setTimeout(()=>{
     alumno.haLlamado=true
    let error = alumno.haLlamado
    ? null
    : 'no se ha podido llamar'
    callback(error,alumno)
   },2000)
 }

 function interview(alumno, callback){
   console.log('entevistando....')
   setTimeout(()=>{
    alumno.fueEntrevistado=true
    let error=alumno.fueEntrevistado
   ? null
    :'no se ha podido entrevistar'
    callback(error,alumno)
   },2000)
 }
 
 function reserve(alumno,callback){
   console.log('reservando...')
   setTimeout(()=>{
    alumno.haReservado=true
    let error=alumno.haReservado
   ? null
    :'no se ha podido reservar'
    callback(error,alumno)
   },2000)
 }

 function firstClass(alumno,callback){
  console.log('llegando a la primera clase...')
  setTimeout(()=>{
   alumno.tomoPrimeraClase=true
   let error=alumno.tomoPrimeraClase
  ? null
   :'no se ha podido llegar'
   callback(error,alumno)
  },2000)
}

callToKodemia(koder,(error,alumnoQueLlamo)=>{
  if (error){
    console.error('[ERROR]:',error)
    return
  }
  interview(alumnoQueLlamo,(error,almunoEntrevistado)=>{
    if (error){
      console.error('[ERROR]:',error)
      return
    }
    reserve(almunoEntrevistado,(error,alumnoQueReservo)=>{
      if (error){
        console.error('[ERROR]:',error)
        return
      }
    firstClass(alumnoQueReservo,(error,AlumnoQueFueAClase)=>{
      if (error){
        console.error('[ERROR]:', error)
        return
      }
      console.log(AlumnoQueFueAClase)
    })
    })
  })
})