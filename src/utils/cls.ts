function classNames<T>(...classes : Array<T> ) {
  return classes.filter(Boolean).join(" ");
}