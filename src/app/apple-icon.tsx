import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a0533 0%, #06091F 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#FFA500',
              lineHeight: 1,
              letterSpacing: '-2px',
            }}
          >
            TPV
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#ffffff',
              marginTop: 4,
              letterSpacing: '2px',
            }}
          >
            VEGAS
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

