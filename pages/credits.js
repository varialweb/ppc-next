import Layout from "../components/layout"


const Credits = () => {
  return (
    <Layout title="Credits">
      <main style={{ display: "grid", justifyItems: "center"}}>
        <h1 style={{ textAlign: 'center'}}>Credits</h1>
        <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        <p>Website designs and developed by <a href="https://www.varial.dev">Varial Web Development</a></p>
      </main>
    </Layout>
  )
}

export default Credits