import axios from "axios"

export const FETCH_DATA = "FETCH_DATA"
export const fetchData = () => {
  return {
    type: FETCH_DATA
  }
}

export const PENJUMLAHAN = "PENJUMLAHAN" // Var constant
export const hitungPenjumlahan = (angkaSatu, angkaDua) => {
  return {
    type: PENJUMLAHAN, // Wajib
    payload: penjumlahanLalala(angkaSatu, angkaDua)
  }
}

const penjumlahanLalala = (angkaOne, angkaTwo) => {
  //...... super duper complex
  const hasil = angkaOne + angkaTwo
  return hasil
}

// API Request
const ApiUrlStarWars = "https://swapi.co/api/people/1/"
export const FETCH_DATA_STAR_WARS = "FETCH_DATA_STAR_WARS"
export const getDataStarWars = () => {
  return {
    type: FETCH_DATA_STAR_WARS,
    payload: getDataSwapiSync()
  }
}

const requestDataStarWars = () => {
  return axios.get(ApiUrlStarWars)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
}


const getDataSwapiSync = async () => {
  const hasil_api_satu = await requestDataStarWars()
  const hasil_api_dua = await requestDataStarWars(hasil_api_satu)
  const hasil_api_tiga = await requestDataStarWars(hasil_api_dua)
  return hasil_api_tiga
}