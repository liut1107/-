jQuery.extend( { popup : {
  win : null,
  url : null,
  opt : null,
  init : function(url, opt, setter){
    this.url = url;
    this.opt = opt;
    this.setter = setter;
    return this;
  },
  show : function(){
    if(this.win == null){
      this.win = window.open(this.url, null, this.opt);
    }
  },
  close : function(){
    if(this.win != null){
      this.win.close();
      this.win = null;
    }
  }
}});