function Preloader({ isLoad }: { isLoad: boolean }) {
  return <div id={isLoad ? "preloader" : "preloader-none"}></div>
}

export { Preloader }
