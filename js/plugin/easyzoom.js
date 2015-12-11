!function(t){"use strict";function i(i,e){return this.$target=t(i),this.opts=t.extend({},x,e),void 0===this.isOpen&&this._init(),this}var e,o,s,h,n,a,r,d,l,c,p,u,f,$,g,m,v,y,x={loadingNotice:"图片加载中...",errorNotice:"The image could not be loaded",errorDuration:2500,preventClicks:!0,onShow:void 0,onHide:void 0};i.prototype._init=function(){var i=this;this.$link=this.$target.find("a"),this.$image=this.$target.find("img"),this.$flyout=t('<div class="easyzoom-flyout" />'),this.$notice=t('<div class="easyzoom-notice" />').css({position:"absolute",top:"45%",width:"100%","text-align":"center"}),this.$target.on("mouseenter.easyzoom touchstart.easyzoom",function(t){i.isMouseOver=!0,t.originalEvent.touches&&1!==t.originalEvent.touches.length||(t.preventDefault(),i.show(t,!0))}).on("mousemove.easyzoom touchmove.easyzoom",function(t){i.isOpen&&(t.preventDefault(),i._move(t))}).on("mouseleave.easyzoom touchend.easyzoom",function(){i.isMouseOver=!1,i.isOpen&&i.hide()}),this._load(this.$link.attr("href")),this.opts.preventClicks&&this.$target.on("click.easyzoom","a",function(t){t.preventDefault()})},i.prototype.show=function(i,n){var a,x,w=this;if(!this.isReady)return void this._load(this.$link.attr("href"),function(){(w.isMouseOver||!n)&&w.show(i)});this.$target.append(this.$flyout),a=this.$target.width(),x=this.$target.height(),f=this.$flyout.width(),$=this.$flyout.height();var z=this.$target.width(),b=this.$target.height(),D=this.$zoom.width(),k=this.$zoom.height();this.$boxDiv=t("<div></div>").css({width:z*(f/D)+"px",height:b*($/k)+"px",backgroundColor:"#b3d5ff",position:"absolute",opacity:"0.3","margin-top":"-"+b*($/k)/2+"px","margin-left":"-"+z*(f/D)/2+"px"}),r=this.$boxDiv.width(),d=this.$boxDiv.height(),l=this.$target.width(),c=this.$target.height(),p=this.$zoom.width(),u=this.$zoom.height(),g=l-r/2,m=r/2,v=c-d/2,y=d/2,this.$target.append(this.$boxDiv),e=this.$zoom.width()-f,o=this.$zoom.height()-$,s=e/a,h=o/x,this.isOpen=!0,this.opts.onShow&&this.opts.onShow.call(this),i&&this._move(i)},i.prototype._load=function(i,e){var o=new Image;this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)),this.$zoom=t(o),o.onerror=t.proxy(function(){var t=this;this.$notice.text(this.opts.errorNotice),this.$target.removeClass("is-loading").addClass("is-error"),this.detachNotice=setTimeout(function(){t.$notice.detach(),t.detachNotice=null},this.opts.errorDuration)},this),o.onload=t.proxy(function(){o.width&&(this.isReady=!0,this.$notice.detach(),this.endZoomHref=i,this.$flyout.html(this.$zoom),this.$target.removeClass("is-loading").addClass("is-ready"),e&&e())},this),o.style.position="absolute",o.src=i},i.prototype._move=function(t){if(0===t.type.indexOf("touch")){var i=t.touches||t.originalEvent.touches;n=i[0].pageX,a=i[0].pageY}else n=t.pageX||n,a=t.pageY||a;var x=this.$target.offset(),w=this.$boxDiv.offset(),z=a-x.top,b=n-x.left,D=Math.ceil(z*h),k=Math.ceil(b*s);0>k||0>D||k>e||D>o?this.hide():(this.$zoom.css({top:""+(u-$)*((w.top-x.top)/(c-d))*-1+"px",left:""+(p-f)*((w.left-x.left)/(l-r))*-1+"px"}),this.$boxDiv.css({top:this.edge(z,v,y)+"px",left:this.edge(b,g,m)+"px"}))},i.prototype.hide=function(){this.isOpen&&(this.$flyout.detach(),this.isOpen=!1,this.$boxDiv.remove(),this.opts.onHide&&this.opts.onHide.call(this))},i.prototype.swap=function(i,e,o){this.hide(),this.isReady=!1,this.detachNotice&&clearTimeout(this.detachNotice),this.$notice.parent().length&&this.$notice.detach(),t.isArray(o)&&(o=o.join()),this.$target.removeClass("is-loading is-ready is-error"),this.$image.attr({src:i,srcset:o}),this.$link.attr("href",e)},i.prototype.teardown=function(){this.hide(),this.$target.removeClass("is-loading is-ready is-error").off(".easyzoom"),this.detachNotice&&clearTimeout(this.detachNotice),delete this.$link,delete this.$zoom,delete this.$image,delete this.$notice,delete this.$flyout,delete this.$boxDiv,delete this.endZoomHref,delete this.isOpen,delete this.isReady},i.prototype.edge=function(t,i,e){return t>i?i:e>t?e:t},i.prototype.load=function(){var t;this.$link?t=this.$link.attr("href"):"",t!=this.endZoomHref&&this._load(this.$link.attr("href"))},t.fn.easyZoom=function(e){return this.each(function(){var o=t.data(this,"easyZoom");o?void 0===o.isOpen&&o._init():t.data(this,"easyZoom",new i(this,e))})},"function"==typeof define&&define.amd?define(function(){return i}):"undefined"!=typeof module&&module.exports&&(module.exports=i)}(jQuery);