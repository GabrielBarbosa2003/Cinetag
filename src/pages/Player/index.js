import Banner from 'components/Banner'
import styles from './Player.module.css'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada'
//import { useEffect, useState } from 'react'
import videos from 'json/db.json'

export default function Player() {
  const params = useParams();
  const video = videos.find((video) => {
      return video.id === Number(params.id); 
  })
  //const parametros = useParams();
  //  useEffect(() => {
  //   fetch(https://my-json-server.typicode.com/GabrielBarbosa2003/cinetag-api/videos?id=${parametros.id})
  //     .then(resposta => resposta.json())
  //     .then(dados => {
  //       setVideo(...dados)
  //     })
  //  }, []);

  if(!video){
      return <NaoEncontrada />



  }
  return(
      <>
          <Banner imagem ="player"/>
          <Titulo>
              <h1>Player</h1>
              <section  className={styles.container}>
              <iframe  src={video.link}  title={video.Titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

              </section>
          </Titulo>

      </>
  )
}