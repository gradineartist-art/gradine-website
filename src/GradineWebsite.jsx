export default function GradineWebsite() {
 const buttonStyle = {
  padding: "12px 22px",
  background: "#111",
  color: "#fff",
  border: "1px solid #333",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "600",
  transition: "0.3s",
  boxShadow: "0 0 20px rgba(255,255,255,0.08)"
}
  return (
    <div style={{
      background: "#000",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>

      <section style={{
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <p style={{
          color: "#888",
          letterSpacing: "3px",
          marginBottom: "20px"
        }}>
          cinematic dark pop project
        </p>

        <h1 style={{
          fontSize: "64px",
          margin: "0",
          fontWeight: "900"
        }}>
          GRADINE
        </h1>

        <p style={{
          fontSize: "22px",
          color: "#ccc",
          marginTop: "20px"
        }}>
          «Не привыкай ко мне... Я как дым.»
        </p>

        <p style={{
          maxWidth: "700px",
          margin: "30px auto",
          color: "#777",
          lineHeight: "1.7"
        }}>
          Emotional cinematic electronic music blending dark pop,
          ambient textures and living vocals that feel like memories speaking back.
        </p>
         <div style={{
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "22px"
}}>
  <a
  href="https://open.spotify.com/user/31tslrmgee4vn3q2jzd6l2lv6wrq?si=tBCUToQzTI-iGlkKrP74xA"
  style={{
    ...buttonStyle,
    border: "1px solid #1DB954",
    boxShadow: "0 0 20px rgba(29,185,84,0.5)"
  }}
>
  Spotify
</a>
  <a
  href="https://music.youtube.com/@gradine_music?si=Vlu48pkgbqGEX1mN"
  style={buttonStyle}
>
  YouTube Music
</a>
   <a
  href="ТВОЯ_ССЫЛКА_НА_YOUTUBE_КАНАЛ"
  style={{
    ...buttonStyle,
    width: "100%",
    maxWidth: "320px",
    border: "1px solid #ff0000",
    boxShadow: "0 0 28px rgba(255,0,0,0.55)",
    marginTop: "6px"
  }}
>
  ▶ Official YouTube Channel
</a>       

         </div>
         <img
          src="/covers/kak-dym.png"
          alt="GRADINE"
          style={{
            width: "100%",
            maxWidth: "1000px",
            borderRadius: "24px",
            marginTop: "40px"
          }}
        />
      </section>

      <section style={{
        padding: "40px 20px"
      }}>
        <h2 style={{
          fontSize: "40px",
          marginBottom: "30px"
        }}>
          Релизы
        </h2>

        <div style={{
          display: "grid",
          gap: "40px"
        }}>

          <div style={{
            background: "#111",
            borderRadius: "20px",
            overflow: "hidden"
          }}>
            <img
              src="/covers/kak-dym.png"
              alt="Как дым"
              style={{
                width: "100%"
              }}
            />

            <div style={{
              padding: "25px"
            }}>
              <h3 style={{
                margin: "0 0 10px 0",
                fontSize: "28px"
              }}>
                Как дым
              </h3>

              <p style={{
                color: "#888"
              }}>
                2026
              </p>

              <p style={{
                color: "#bbb",
                lineHeight: "1.6"
              }}>
                Dark cinematic electronic single about emotional distance,
                memory and transformation.
              </p>
            </div>
          </div>

    <div style={{
  background: "#111",
  borderRadius: "20px",
  overflow: "hidden"
}}>
  <img
    src="/covers/iskrit.png"
    alt="ИСКРИТ"
    style={{
      width: "100%"
    }}
  />

  <div style={{
    padding: "25px"
  }}>
    <h3 style={{
      margin: "0 0 10px 0",
      fontSize: "28px"
    }}>
      ИСКРИТ
    </h3>

    <p style={{
      color: "#888"
    }}>
      2026
    </p>

    <p style={{
      color: "#bbb",
      lineHeight: "1.6"
    }}>
      Neon cinematic electronic anthem about energy, awakening and emotional fire.
    </p>
  </div>
</div>    </div>
      </section>

    
  </div>


  )
}
