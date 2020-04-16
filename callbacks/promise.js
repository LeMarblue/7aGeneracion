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

// funciones Promificadas
function callToKodemiaPromificada(alumno){
  return new Promise((resolve,reject)=>{
    callToKodemia(alumno,(error,alumnoQueLlamo)=>{
      if (error){
      reject (error)
      return
    }
    resolve (alumnoQueLlamo)
    })
  })
}

function interviewPromificada(alumno){
  return new Promise((resolve,reject)=>{
    interview(alumno,(error,alumnoEntrevistado)=>{
      if (error){
      reject (error)
      return
    }
    resolve (alumnoEntrevistado)
    })
  })
}

function reservePromificada(alumno){
  return new Promise((resolve,reject)=>{
    reserve(alumno,(error,alumnoQueReservo)=>{
      if (error){
      reject (error)
      return
    }
    resolve (alumnoQueReservo)
    })
  })
}

function firstClassPromificada(alumno){
  return new Promise((resolve,reject)=>{
    firstClass(alumno,(error,alumnoQueFueAclases)=>{
      if (error){
      reject (error)
      return
    }
    resolve (alumnoQueFueAclases)
    })
  })
}

callToKodemiaPromificada(koder)
  .then(alumnoQueLlamo=>{
    console.log('alumnoQueLlamo:',alumnoQueLlamo)
    interviewPromificada(alumnoQueLlamo)
    .then(alumnoEntrevistado=>{
      console.log('alumnoEntrevistado:', alumnoEntrevistado)
      reservePromificada(alumnoEntrevistado)
      .then(alumnoQueReservo=>{
        console.log('alumnoQueReservo:',alumnoQueReservo)
        firstClassPromificada(alumnoQueReservo)
        .then(alumnoQueFueAclases=>{
          console.log('alumnoQueFueAclases:',alumnoQueFueAclases)
        })
        .catch(error=>console.error('errorEnLaPrimeraClase',error))
      })
      .catch(error=>console.error('errorDeRservacion',error))
    })
    .catch(error=>console.error('errorEntrevistando',error))
  })
  .catch(error=>console.error('error',error))
