export default function Loader() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        overflow: 'hidden',
        overflowY: 'auto',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '99',
        background: 'white',
      }}
    >
      <div className="loader"></div>
    </div>
  )
}
