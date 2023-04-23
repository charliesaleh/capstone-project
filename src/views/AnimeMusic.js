import React, { useState, useEffect } from "react"

export default function AnimeMusic() {
  const clientId = "99ef9ff2153b45b6bd4a335fb5da07d6"
  const clientSecret = "71d0849ff6fc4c12bb18246d9941b9a2"

  const getToken = async () => {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    const data = await response.json()
    const token = data.access_token
    return token
  }

  getToken()

  const getSong = async (track, artist) => {
    const token = await getToken()
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${track},${artist}&type=track,artist`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const data = await response.json()
    const song = data.tracks.items[0].preview_url
    return song
  }

  getSong("")

  const [audioPlayed, setAudioPlayed] = useState("")

  useEffect(() => {
    const audioSpotify = document.getElementById("audioPlay")
    if (audioPlayed) {
      audioSpotify.src = audioPlayed
      audioSpotify.load()
      audioSpotify.play()
    } else {
      audioSpotify.pause()
    }
  }, [audioPlayed])

  const clickedSong = async (divId) => {
    const index = parseInt(divId.substring(3), 10)

    const allTracks = document.getElementsByClassName("title-text")
    const track = allTracks[index].innerText

    const allArtists = document.getElementsByClassName("artist-text")
    const artist = allArtists[index].innerText

    const songUrl = await getSong(track, artist)
    return setAudioPlayed(songUrl)
  }

  let audio = ""

  return (
    <body className="animemusicbody">
      <div>
        <br />
        <br />
        <main>
          <p class="recent-text">Preview Some Anime Music</p>
          <div class="anime-container">
            <div
              className="box"
              id="div0"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://aop-emtg-jp.s3.amazonaws.com/prod/public/sim/contents/information/61d9dcc5753f03a94bf32a923fe1b33e.jpeg"
                alt=""
              />
              <p class="title-text">The Rumbling</p>
              <p class="artist-text">SiM</p>
            </div>
            <br />
            <div
              class="box"
              id="div1"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b2739f5ec7f7bba1f7a3179c4aa0"
                alt=""
              />
              <p class="title-text">Under the Tree</p>
              <p class="artist-text">SiM</p>
            </div>
            <br />
            <div
              class="box"
              id="div2"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/W_dGo902nFhhNGM14n2vmPDQ9SaLFZPYbzfpL-T-_uRxmPlahRpceg5IOEfXUD9ETUsuCoti3BAoOl2MyQ=w544-h544-l90-rj"
                alt=""
              />
              <p class="title-text">attack ON Taian [TFSv]</p>
              <p class="artist-text">Hiroyuki Sawano</p>
            </div>
            <br />
            <div
              class="box"
              id="div3"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b27374164dc6fb6a320abf6a34fd"
                alt=""
              />
              <p class="title-text">Shinzo wo Sasageyo!</p>
              <p class="artist-text">Linked Horizon</p>
            </div>
            <br />
            <div
              class="box"
              id="div4"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273bd3814048a90a816b93a96bf"
                alt=""
              />
              <p class="title-text">Number One</p>
              <p class="artist-text">Shiro SAGISU</p>
            </div>
            <br />
            <div
              class="box"
              id="div5"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61a9IXHiZbL._UXNaN_FMjpg_QL85_.jpg"
                alt=""
              />
              <p class="title-text">Bury the Light</p>
              <p class="artist-text">Casey Edwards & Victor Borba</p>
            </div>
            <div
              class="box"
              id="div6"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273b11c3ab5cb818192b7a61fdd"
                alt=""
              />
              <p class="title-text">Unravel</p>
              <p class="artist-text">TK from Ling Tosite Sigure</p>
            </div>
            <div
              class="box"
              id="div7"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61aPVRthGqL._UF1000,1000_QL80_.jpg"
                alt=""
              />
              <p class="title-text">Dragon Soul</p>
              <p class="artist-text">Takayoshi Tanimoto</p>
            </div>
            <div
              class="box"
              id="div8"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Yzdxuc8OL._UF1000,1000_QL80_.jpg"
                alt=""
              />
              <p class="title-text">Yeah! Break! Care! Break!</p>
              <p class="artist-text">Takayoshi Tanimoto</p>
            </div>
            <div
              class="box"
              id="div9"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.ebayimg.com/images/g/FcwAAOSwn7JYEuR9/s-l500.jpg"
                alt=""
              />
              <p class="title-text">Kokoro no Hane</p>
              <p class="artist-text">AKB48</p>
            </div>
            <br />
            <div
              class="box"
              id="div10"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b2732e09d63a7ba7fa7071e26524"
                alt=""
              />
              <p class="title-text">Vogel Im Kafig</p>
              <p class="artist-text">Hiroyuki Sawano</p>
            </div>
            <div
              class="box"
              id="div11"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273e25e3bb59950e8fc7c29f921"
                alt=""
              />
              <p class="title-text">Guren no Yumiya</p>
              <p class="artist-text">Linked Horizon</p>
            </div>
            <div
              class="box"
              id="div12"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273467fc4ac9ecb7e8fb58db6e5"
                alt=""
              />
              <p class="title-text">Ｗ●ＲＫ</p>
              <p class="artist-text">millennium parade and Sheena Ringo</p>
            </div>
            <div
              class="box"
              id="div13"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273303d8545fce8302841c39859"
                alt=""
              />
              <p class="title-text">Kick Back</p>
              <p class="artist-text">Kenshi Yonezu</p>
            </div>
            <div
              class="box"
              id="div14"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273953495ccff3d6488674ac770"
                alt=""
              />
              <p class="title-text">Boku no Sensou</p>
              <p class="artist-text">Shinsei Kamattechan</p>
            </div>
            <div
              class="box"
              id="div15"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273947370ce837b61d9b28d20b9"
                alt=""
              />
              <p class="title-text">STAND PROUD</p>
              <p class="artist-text">Jin Hashimoto</p>
            </div>
            <div
              class="box"
              id="div16"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b2736ab0bfcdd4b2564d35b49ed3"
                alt=""
              />
              <p class="title-text">Hero's Come Back!!</p>
              <p class="artist-text">Nobodyknows+</p>
            </div>
            <div
              class="box"
              id="div17"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b2735e416d315239077b49cb36db"
                alt=""
              />
              <p class="title-text">D-tecnoLife</p>
              <p class="artist-text">UVERworld</p>
            </div>
            <div
              class="box"
              id="div18"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b2731b279d1c49fe9bbc1cfd4b2a"
                alt=""
              />
              <p class="title-text">Clattanoia</p>
              <p class="artist-text">OxT</p>
            </div>
            <div
              class="box"
              id="div19"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/86/67/fe/8667feef-4334-5f25-0994-7b1de5072bfd/jacket_KSXX00591B00Z_550.jpg/1200x1200bf-60.jpg"
                alt=""
              />
              <p class="title-text">Cha-La Head-Cha-La</p>
              <p class="artist-text">FLOW</p>
            </div>
            <div
              class="box"
              id="div20"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b2738279c8246c461b099d3c1584"
                alt=""
              />
              <p class="title-text">We Are!</p>
              <p class="artist-text">Hiroshi Kitadani</p>
            </div>
            <div
              class="box"
              id="div21"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273e097e4fe810faf8c4c8cd218"
                alt=""
              />
              <p class="title-text">The World</p>
              <p class="artist-text">Nightmare</p>
            </div>
            <div
              class="box"
              id="div22"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273c7961a503727ee0d61edac2b"
                alt=""
              />
              <p class="title-text">JOJO SONO CHINO SADAME</p>
              <p class="artist-text">Hiroaki Tommy Tominaga</p>
            </div>
            <div
              class="box"
              id="div23"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273d1d6bbf22adc570c36a94d67"
                alt=""
              />
              <p class="title-text">Might*U</p>
              <p class="artist-text">Yuki Hayashi</p>
            </div>
            <div
              class="box"
              id="div24"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273745bddd5dce1fea1cf390d37"
                alt=""
              />
              <p class="title-text">Sakuramitsutsuki</p>
              <p class="artist-text">SPYAIR</p>
            </div>
            <div
              class="box"
              id="div25"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273f011b6033fde09faa79b5000"
                alt=""
              />
              <p class="title-text">Gurenge</p>
              <p class="artist-text">Lisa</p>
            </div>
            <div
              class="box"
              id="div26"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b27303a6025a7871c9b33fb94134"
                alt=""
              />
              <p class="title-text">Ranbu No Melody</p>
              <p class="artist-text">Sid</p>
            </div>
            <div
              class="box"
              id="div27"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/W_dGo902nFhhNGM14n2vmPDQ9SaLFZPYbzfpL-T-_uRxmPlahRpceg5IOEfXUD9ETUsuCoti3BAoOl2MyQ=w544-h544-l90-rj"
                alt=""
              />
              <p class="title-text">ELO</p>
              <p class="artist-text">Hiroyuki Sawano</p>
            </div>
            <div
              class="box"
              id="div28"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab6761610000e5eb472c006249f94976f9635974"
                alt=""
              />
              <p class="title-text">Ikimonogakari</p>
              <p class="artist-text">Blue Bird</p>
            </div>
            <div
              class="box"
              id="div29"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b27320c283895eaebdb5f1a83d03"
                alt=""
              />
              <p class="title-text">HERO</p>
              <p class="artist-text">JAM Project</p>
            </div>
            <div
              class="box"
              id="div30"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b2731d7b1035c7d642b765605144"
                alt=""
              />
              <p class="title-text">Good Morning World!</p>
              <p class="artist-text">BURNOUT SYNDROMES</p>
            </div>
            <div
              class="box"
              id="div31"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ce7b647fbb4e137ba39ad271"
                alt=""
              />
              <p class="title-text">What’s Up, People?!</p>
              <p class="artist-text">Maximum the Hormone</p>
            </div>
            <div
              class="box"
              id="div32"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ae93afe5a0722e356d4da246"
                alt=""
              />
              <p class="title-text">Liar Mask</p>
              <p class="artist-text">Rika Mayama</p>
            </div>
            <div
              class="box"
              id="div33"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273900a123712c319f43676f454"
                alt=""
              />
              <p class="title-text">Rightfully</p>
              <p class="artist-text">Mili</p>
            </div>
            <div
              class="box"
              id="div34"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273701f163bcc0ddc5f52d5172e"
                alt=""
              />
              <p class="title-text">Rakuen</p>
              <p class="artist-text">Fujifabric</p>
            </div>
            <div
              class="box"
              id="div35"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b27356b96176d2881756ec562937"
                alt=""
              />
              <p class="title-text">Kawaki wo Ameku</p>
              <p class="artist-text">Minami</p>
            </div>
            <div
              class="box"
              id="div36"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273822736bdd6a43e26d63c4a8b"
                alt=""
              />
              <p class="title-text">Let Me Hear</p>
              <p class="artist-text">Fear, and loathing in Las Vegas</p>
            </div>
            <div
              class="box"
              id="div37"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273d49b6c0f3fc11726cb9ec9ea"
                alt=""
              />
              <p class="title-text">RISE</p>
              <p class="artist-text">MADKID</p>
            </div>
            <div
              class="box"
              id="div38"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b27354655ed2cbb7dc3c55a56c06"
                alt=""
              />
              <p class="title-text">HOLLOW HUNGER</p>
              <p class="artist-text">OxT</p>
            </div>
            <div
              class="box"
              id="div39"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b2730b0ed651a6839e71607da946"
                alt=""
              />
              <p class="title-text">Dance in the Game</p>
              <p class="artist-text">ZAQ</p>
            </div>
            <div
              class="box"
              id="div40"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273c43a3f0cccbe7481e82dd244"
                alt=""
              />
              <p class="title-text">Voice?</p>
              <p class="artist-text">Hatena</p>
            </div>
            <div
              class="box"
              id="div41"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/W_dGo902nFhhNGM14n2vmPDQ9SaLFZPYbzfpL-T-_uRxmPlahRpceg5IOEfXUD9ETUsuCoti3BAoOl2MyQ=w544-h544-l90-rj"
                alt=""
              />
              <p class="title-text">Into the Night</p>
              <p class="artist-text">KOHTA YAMAMOTO</p>
            </div>
            <div
              class="box"
              id="div42"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://images.genius.com/fa8b04e87203abab2af35e5694c31e62.1000x1000x1.jpg"
                alt=""
              />
              <p class="title-text">Akuma no Ko</p>
              <p class="artist-text">Ai Higuchi</p>
            </div>
            <div
              class="box"
              id="div43"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273c9cfb9c2da79dbbbba095698"
                alt=""
              />
              <p class="title-text">Tsukiakari</p>
              <p class="artist-text">Amamiya Sora</p>
            </div>
            <div
              class="box"
              id="div44"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b27321d8d130d93330f5bcd68b1e"
                alt=""
              />
              <p class="title-text">AOI SENKOU</p>
              <p class="artist-text">七陰</p>
            </div>
            <div
              class="box"
              id="div45"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b2735bcddc359df3b4ba88c252e0"
                alt=""
              />
              <p class="title-text">Shogeki</p>
              <p class="artist-text">Yuko Ando</p>
            </div>
            <div
              class="box"
              id="div46"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ff70bedd73746c8b063d7bb5"
                alt=""
              />
              <p class="title-text">Yuugure no Tori</p>
              <p class="artist-text">Shinsei Kamattechan</p>
            </div>
            <div
              class="box"
              id="div47"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273d54307758552166849b9e148"
                alt=""
              />
              <p class="title-text">Light no Theme</p>
              <p class="artist-text">Hideki Taniuchi</p>
            </div>
            <div
              class="box"
              id="div48"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273d8cfa1c163334abf3e5817e9"
                alt=""
              />
              <p class="title-text">Bauklotze</p>
              <p class="artist-text">Hiroyuki Sawano</p>
            </div>
            <div
              class="box"
              id="div49"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/W_dGo902nFhhNGM14n2vmPDQ9SaLFZPYbzfpL-T-_uRxmPlahRpceg5IOEfXUD9ETUsuCoti3BAoOl2MyQ=w544-h544-l90-rj"
                alt=""
              />
              <p class="title-text">Footsteps of Doom</p>
              <p class="artist-text">KOHTA YAMAMOTO</p>
            </div>
            <div
              class="box"
              id="div50"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b27371d21ece7ed6184d6e887c15"
                alt=""
              />
              <p class="title-text">超☆スーパー Dragon Soul</p>
              <p class="artist-text">Takayoshi Tanimoto</p>
            </div>
            <div
              class="box"
              id="div51"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.discogs.com/tu64uwgXFGRn9JOzzqoMr56KRzg3VqDzd3tuS8o43Tg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3Nzky/NDc2LTE2MTU0NzUx/NjYtMjM1Mi5qcGVn.jpeg"
                alt=""
              />
              <p class="title-text">You See Big Girl/T:T</p>
              <p class="artist-text">Hiroyuki Sawano</p>
            </div>
            <div
              class="box"
              id="div52"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b273d54307758552166849b9e148"
                alt=""
              />
              <p class="title-text">L no Theme</p>
              <p class="artist-text">Hideki Taniuchi</p>
            </div>
            <div
              class="box"
              id="div53"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b2730809f5b6616747f5abbe8824"
                alt=""
              />
              <p class="title-text">Licht und Schatten</p>
              <p class="artist-text">Yutaka Yamada</p>
            </div>
            <div
              class="box"
              id="div54"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://i.discogs.com/tu64uwgXFGRn9JOzzqoMr56KRzg3VqDzd3tuS8o43Tg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3Nzky/NDc2LTE2MTU0NzUx/NjYtMjM1Mi5qcGVn.jpeg"
                alt=""
              />
              <p class="title-text">Barricades</p>
              <p class="artist-text">Hiroyuki Sawano</p>
            </div>
            <div
              class="box"
              id="div55"
              onClick={(event) => {
                clickedSong(event.currentTarget.id)
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/W_dGo902nFhhNGM14n2vmPDQ9SaLFZPYbzfpL-T-_uRxmPlahRpceg5IOEfXUD9ETUsuCoti3BAoOl2MyQ=w544-h544-l90-rj"
                alt=""
              />
              <p class="title-text">All of the Freedoms</p>
              <p class="artist-text">KOHTA YAMAMOTO</p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <nav class="navbar navbar-light bg-dark">
            <audio id="audioPlay" controls>
              <source src={audio} />
            </audio>
          </nav>
        </main>
      </div>
    </body>
  )
}
