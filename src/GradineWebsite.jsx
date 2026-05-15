export default function GradineWebsite() {
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
