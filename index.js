class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    const regex = /[^A-Za-z0-9 '-]/g
    return string.replace(regex , "")
  }
  static titleize(string){
    const excludedWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = string.split(" ")
    let changedString = []
    changedString.push(this.capitalize(words[0]))
    for (let i = 1; i < words.length; i++) {
        if(excludedWords.includes(words[i])){
          changedString.push(words[i])
        }else{
          changedString.push(this.capitalize(words[i]))
        }
      }
    return changedString.join(" ")
  }
}