import GitHubCalendar from "react-github-calendar"

const Github = () => {
  return (
    <div className="section contact center">
      <h2 className="section__title">Days is code</h2>
      <GitHubCalendar
        username="svyatoslavw"
        blockSize={15}
        blockMargin={5}
        color="#516dd3"
        fontSize={16}
        style={{ margin: "0 auto" }}
      />
    </div>
  )
}

export default Github
