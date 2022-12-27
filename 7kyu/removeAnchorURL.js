//Complete the function/method so that it returns the url with anything after the anchor (#) removed.



function removeUrlAnchor(url){
  if( !url.includes('#') ){
    return url
  }else{
    url = url.split('')
    let index = url.indexOf('#')
    url.splice(index, url.length - 1)
    return url.join('')
  }
}