var bar = {
  cat: {
    current: null,
    setItems: function (cat, items) { return bar.cats[cat] = items; },
    create: function (name, value) { return bar.cats[name] = value || []; },
    load: function (name) {
      //populate table with items of the category
      var menuItemTableBody = $("#menuItemTableBody");
      menuItemTableBody.empty();
      var items = bar.cats[name];
      if (items && items.length) {
        $("#menuItemTableHead").show();
        for (var i = 0; i < items.length; i++) {
          menuItemTableBody.append(bar.item.row(items[i]));
        }
      }
      //no items, default message
      else {
        $("#menuItemTableHead").hide();
        menuItemTableBody.append('<tr><td>Lamento, não estão disponíveis artigos desta categoria.</td></tr>');
      }
      
      //update classes (highlight selected category)
      if (bar.cat.current) $('#cat'+bar.cat.current).removeClass("pageCatSelected");
      bar.cat.current = name;
      $('#cat'+name).addClass("pageCatSelected");
      
      //scroll to top and resize scrollbar
      var menuItemList = $("#menuItemList");
      menuItemList.scrollTop(0);
      menuItemList.getNiceScroll().resize();
    }
  },
  cats: {},
  art: {
    current: null,
    setItems: function (art, items) { return bar.arts[art] = items; },
    create: function (name, value) {
      bar.music.count = (Math.floor(bar.music.count / 100) + 1) * 100;
      return bar.arts[name] = value || []; },
    load: function (name) {
      //populate table with musics of the artegory
      var karaokeMusicTable = $("#karaokeMusicTable");
      karaokeMusicTable.empty();
      var musics = bar.arts[name];
      if (musics && musics.length) {
        //$("#menuMusicTableHead").show();
        for (var i = 0; i < musics.length; i++) {
          karaokeMusicTable.append(bar.music.row(musics[i]));
        }
      }
      //no musics, default message
      else {
        $("#menuMusicTableHead").hide();
        karaokeMusicTable.append('<tr><td>Lamento, não estão disponíveis músicas desta categoria.</td></tr>');
      }
      
      //update classes (highlight selected artegory)
      if (bar.art.current) $('#art'+bar.art.current).removeClass("pageCatSelected");
      bar.art.current = name;
      $('#art'+name).addClass("pageCatSelected");
      
      //scroll to top and resize scrollbar
      var menuMusicList = $("#karaokeMusicList");
      menuMusicList.scrollTop(0);
      menuMusicList.getNiceScroll().resize();
    }
  },
  arts: {},
  music: {
    count: 0,
    create: function (art, name, video) {
      var id = bar.music.count++;
      var music = {id: id, art: art, name: name, video: video};
      bar.musics[id] = music;
      return music;
    },
    get: function (id) { return bar.musics[id]; },
    showVideo: function (id, offset) {
      var music = bar.music.get(id);
      bar.popup.alert(music.art+' - '+music.name+'<br /><br />'+(music.video ? '<video autoplay'+(!offset ? ' controls' : '')+' id="menuMusicDescriptionVideo"><source src="karaoke/'+music.video+'" type="video/mp4"></video>' : 'Lamento, o vídeo desta música não está disponível.<br /><br />'), null, {ok: 'Fechar', nobr: true, css: {'width': '95%'}});
      var video = $('#menuMusicDescriptionVideo');
      var width = $(window).width() * 0.9;
      var height = Math.min(width * 9 / 16, $(window).height() * 0.7);
      video.height(height);
      video.width(height * 16 / 9);
      if (offset) video.get(0).addEventListener('loadedmetadata', function() {
        this.currentTime = offset;
      }, false);
    },
    row: function (music) {
      if (!music) return 'error';
      return '<tr id="music'+music.id+'"><td style="width:12%;">#'+music.id+'</td>\
      <td class="link" style="width:33%; text-align: right;" onclick="bar.music.showVideo('+music.id+')">'+music.art+'</td>\
      <td class="link" style="width:33%; text-align: left;" onclick="bar.music.showVideo('+music.id+')">'+music.name+'</td>\
      <td class="button buttonGreen" style="width:12%;" onclick="bar.pages.karaoke.choseMusic('+music.id+')">Cantar</td></tr>';
    }
  },
  musics: {}, //id->music
  item: {
    create: function (id, name, price, img, desc) {
      var item = {id: id, name: name, price: price, img: img, desc: desc};
      bar.items[id] = item;
      return item;
    },
    get: function (id) { return bar.items[id]; },
    showDescription: function (id) {
      var item = bar.item.get(id);
      bar.popup.alert(item.name+'<br /><br />\
        <table>\
          <tr>\
            '+(item.img ? '<td width="33%"><img id="menuItemDescriptionImg" src="images/'+item.img+'" /></td>' : '')+
            '<td style="padding-left: 10px; text-align: left;">'+(item.desc ? item.desc : 'Sem descrição disponível.')+'</td>\
          </tr>\
        </table>', null, {width: '1000px'});
    },
    row: function (item) {
      return '<tr id="item'+item.id+'"><td>#'+item.id+'</td>\
      <td'+(item.img ? ' class="link" onclick="bar.item.showDescription('+item.id+')"' : '')+'>'+(item.img ? '<img alt="" style="border-radius: 10px; vertical-align: middle" src="images/'+item.img+'" />' : '')+'</td>\
      <td class="link" style="width:100%" onclick="bar.item.showDescription('+item.id+')">'+item.name+'<img class="menuInfoIcon" src="images/info.png" /></td>\
      <td>'+item.price.toFixed(2)+'€</td>\
      <td class="'+(bar.req.getAmount(item.id) ? 'buttonRed  link"' : 'itemDecDisabled"')+' onclick="bar.req.dec('+item.id+')"><span id="itemDec'+item.id+'" style="display:'+(bar.req.getAmount(item.id) ? '' : 'none')+'">-</span></td>\
      <td id="itemQtt'+item.id+'">'+bar.req.getAmount(item.id)+'</td>\
      <td class="itemInc link buttonGreen" onclick="bar.req.inc('+item.id+')">+</td></tr>';
    }
  },
  items: {}, //id->item
  niceScrollOptions: {cursorcolor:"#424242", cursoropacitymax: 0.6,
    touchbehavior: true, bouncescroll: false, autohidemode: false, cursordragontouch: false},
  pages: {
    //menu page
    menu: {
      firstOpen: true, //true if menu page was never opened
      exitConfirmed: false, //if true, won't ask to finalize req on exit
      open: function () {
        return function () {
          //menu opened for the first time
          if (bar.pages.menu.firstOpen) {
            //populate categories
            var menuCats = $("#menuCats");
            menuCats.empty();
            for (var cat in bar.cats) {
              menuCats.append('<span id="cat'+cat+'" onclick="bar.cat.load(\''+cat+'\')">'+cat+'</span>');
            }
            //setups scrolls
            $("#menuCatsContainer").niceScroll('#menuCats', bar.niceScrollOptions);
            $("#menuReqScrollableDiv").niceScroll('#menuReqTable', bar.niceScrollOptions);
            $("#menuItemList").niceScroll('#menuItemTable', bar.niceScrollOptions);

            //event handlers
            $("#searchItemsButton").click(function () {
              bar.popup.alert("Lamento, esta funcionalidade ainda não está implementada.");
            });
            $("#reqConfButton").click(function () {
              if (bar.req.total) bar.popup.confirm("Tens a certeza que queres finalizar o pedido?", function (result) {
                if (result) bar.req.confirmed();
              }, {ok: "Finalizar", cancel: "Não"});
              else bar.popup.alert("Não tens nenhum artigo pedido.<br />Podes adicionar artigos premindo os botões +.");
            });
            bar.pages.menu.firstOpen = false;
          }
          //open default category
          bar.cat.load("Recomendado");
          
          //update request list
          bar.req.updateReqList();

          //resize everything now and when the window is resized
          $(window).resize(bar.pages.menu.updateSizeAll);
          bar.pages.menu.updateSizeAll();
        };
      },
      close: function (name) {
        if (bar.req.total && !bar.pages.menu.exitConfirmed && name == "main") {
          bar.popup.confirm('Ainda não finalizaste o pedido, queres finalizar antes de voltar ao menu principal?', function (result) {
            if (result) bar.req.confirmed();
            else {
              bar.pages.menu.exitConfirmed = true;
              window.location = '#';
            }
          }, {ok: "Finalizar", cancel: "Continuar"});
          return false;
        }
        return true;
      },
      fadeInEnd: function () { bar.pages.menu.updateSize(); },
      updateSize: function () {
        var menuCatsContainer = $("#menuCatsContainer");
        var menuReqScrollableDiv = $("#menuReqScrollableDiv");
        menuCatsContainer.hide();
        menuReqScrollableDiv.hide();
        var availableSpace = $("#menuLeft").height() - 6;
        //alert(availableSpace);
        menuReqScrollableDiv.css("max-height", availableSpace / 2);
        if (bar.req.total) menuReqScrollableDiv.show();
        //alert(menuReqScrollableDiv.height());
        $("#menuCatsContainer").css("max-height", availableSpace - (bar.req.total ? menuReqScrollableDiv.height() : 0));
        menuCatsContainer.show();
        menuCatsContainer.getNiceScroll().resize();
        menuReqScrollableDiv.getNiceScroll().resize();
        
        var menuItemList = $("#menuItemList");
        menuItemList.css("max-height", menuItemList.parent().height());
        menuItemList.getNiceScroll().resize();
      },
      updateSizeAll: function () {
        $("#menuTable").css("height", $(window).height());
        bar.pages.menu.updateSize();
      }
    },
    //pedidos page
    pedidos: {
      firstOpen: true,
      open: function () {
        for (var i in totalReqs) break;
        if (!i) bar.popup.alert('Não tens nenhum pedido.');
        else return function () {
          //pedidos opened for the first time
          if (bar.pages.pedidos.firstOpen) {
            //setups scrolls
            $("#pedidosList").niceScroll('#pedidosTable', bar.niceScrollOptions);
            bar.pages.pedidos.firstOpen = false;
          }          
          //totalReqs = {100: 1, 101: 2, 102: 6, 104: 1, 105: 5, 202: 4, 204: 2, 205: 1, 207: 1, 108: 3, 110: 1, 111: 1, 114: 5, 116: 2}; //FIXME
          var total = 0;
          var pedidosTable = $('#pedidosTableBody');
          pedidosTable.empty();
          for (var i in totalReqs) {
            var item = bar.item.get(i), amount = totalReqs[i];
            pedidosTable.append(bar.req.row(item, amount));
            total += item.price * amount;
          }
          $('#pedidosTotal').html('<b>TOTAL:</b> '+total.toFixed(2)+'€');
        }
      }
    },
    //karaoke page
    karaoke: {
      firstOpen: true,
      chosenMusic: 0,
      choseMusic: function (id) {
        var music = bar.music.get(id);
        var afterChosing = function () {
          bar.popup.alert("Inscreveste-te para cantar a música:<br />'"+music.name+"' de '"+music.art+"'.<br /><br />Boa sorte!", function () {
            bar.pages.karaoke.updateChosenMusicInfo(music);
            $("#karaokeChosenMusicContainer").fadeIn();
            
          }, {ok: 'Fechar'});
          bar.pages.karaoke.chosenMusic = id;
        }
        if (bar.pages.karaoke.chosenMusic) {
          if (bar.pages.karaoke.chosenMusic == id) bar.popup.alert("Tu já estás inscrito para cantar esta música.");
          else {
            var chosen = bar.music.get(bar.pages.karaoke.chosenMusic);
            bar.popup.confirm('Já te inscreveste para cantar a música \''+chosen.name+'\' de \''+chosen.art+'\'.<br /><br />Desejas cantar \''+music.name+'\' de \''+music.art+'\' em vez dessa?', function (result) {
              if (result) afterChosing();
            }, {ok: 'Sim', cancel: 'Não'});
          }
        }
        else afterChosing();
      },
      open: function () {
        //bar.popup.alert("Lamento, esta função ainda não está implementada.");
        return function () {
          //karaoke opened for the first time
          if (bar.pages.karaoke.firstOpen) {
            //populate artists
            var karaokeCats = $("#karaokeCats");
            karaokeCats.empty();
            for (var art in bar.arts) {
              karaokeCats.append('<span id="art'+art+'" onclick="bar.art.load(\''+art+'\')">'+art+'</span>');
            }          
            //setup scrolls
            $("#karaokeCatsContainer").niceScroll('#karaokeCats', bar.niceScrollOptions);
            $("#karaokeMusicList").niceScroll('#karaokeMusicTable', bar.niceScrollOptions);
            
            //event handlers
            $("#searchMusicButton").click(function () {
              bar.popup.alert("Lamento, esta funcionalidade ainda não está implementada.");
            });
            $("#karaokePlayingButton").click(function () {
              bar.music.showVideo(117, 60);
            });
            $("#karaokeCancelMusicButton").click(function () {
              bar.popup.confirm('Tens a certeza que te queres desinscrever do karaoke?', function (result) {
                if (result) {
                  $("#karaokeChosenMusicContainer").fadeOut();
                  bar.pages.karaoke.chosenMusic = 0;
                }
              }, {ok: 'Sim', cancel: 'Voltar'})
            });
            bar.pages.karaoke.firstOpen = false;
          }
          //open default category
          bar.art.load("Recomendado");
          //chosen music
          if (bar.pages.karaoke.chosenMusic) {
            bar.pages.karaoke.updateChosenMusicInfo(bar.music.get(bar.pages.karaoke.chosenMusic));
            $("#karaokeChosenMusicContainer").show();
          }
          else $("#karaokeChosenMusicContainer").hide();
        };
      },
      updateChosenMusicInfo: function (music) {
        $('#karaokeChosenMusic').html('Vais cantar: '+music.art+" - "+music.name);
        $('#karaokeChosenMusic').click(function () { bar.music.showVideo(bar.pages.karaoke.chosenMusic); });
      }
    },
    //karaoke-playing page
    karaokePlaying: {
      open: function () {
        bar.popup.alert("Lamento, esta função ainda não está implementada.");
      }
    },
    //pagar page
    pagar: {
      open: function () {
        var total = 0;
        for (var i in totalReqs) total += bar.item.get(i).price * totalReqs[i];
        if (!total) bar.popup.alert('Não tens nenhum pedido finalizado.', null, {ok: 'Fechar'});
        else bar.popup.confirm('Tens a certeza que queres pagar a conta no total de '+total.toFixed(2)+'€?'+(bar.page.current == "main" ? '<br /><br />Podes voltar e tocar em VER CONTA para ver a conta em detalhe.' : ''), function (result) {
          if (result) {
            totalReqs = {};
            bar.popup.alert('A factura será impressa em breve.<br />Obrigado por utilizares o barISTa!', null, {ok: 'Fechar'});
            window.location = '#';
          }
        }, {ok: 'Pagar', cancel: 'Voltar'});
      }
    },
    //help page
    help: {
      open: function (name) {
        switch (name) {
          case 'main': bar.popup.alert('Bem-vindo ao barISTa.<br /><br />\
            <span style="display: inline-block; text-align: left;">\
              Toca no botão do menu correspondente à funcionalidade pretendida.<br /><br />\
              Toca em CARDÁPIO para consultar o cardápio e fazer pedidos.<br />\
              Toca em VER CONTA para consultar os pedidos já efectuados.<br />\
              Toca em KARAOKE para te inscreveres no karaoke ou acompanhar a letra da música que está a passar.<br />\
              Toca em PAGAR para pagar a conta e imprimir uma factura.<br />\
              Toca em BLOQUEAR para voltar ao ecrã inicial e evitar o uso não itencional do barISTa.\
            </span>',
            null, {ok: 'Fechar', width: '800px'}); break;
          case 'menu': bar.popup.alert('CARDÁPIO<br /><br />\
            <span style="display: inline-block; text-align: left;">\
              Toca na categoria que pretendes para visualizar os artigos dessa categoria.<br />\
              Toca no nome ou na imagem do artigo para ver a sua descrição.<br />\
              Toca em + ou - para adicionar ou remover artigos ao pedido.<br />\
              Revê e/ou altera o teu pedido na lista \"A Pedir\"<br />\
              Carrega em pedir quando quiseres finalizar o teu pedido.<br /><br />\
              Podes também tocar no botão de pesquisa para procurar artigos pelo nome ou id. <span style="color:orange">(Ainda não implementado)</span>\
            </span>',
            null, {ok: 'Fechar', width: '800px'}); break;
          case 'karaoke': bar.popup.alert('KARAOKE<br /><br />\
            <span style="display: inline-block; text-align: left;">\
              Escolhe o artista pretendido tocando na letra inicial do seu nome.<br >\
              Toca no nome do artista ou no nome da música para ver o vídeo da música.<br />\
              Podes inscrever-te para cantar uma música tocando no botão CANTAR à direita da música.<br />\
              Se quiseres mudar de música, podes carregar novamente no botão CANTAR da nova música.<br />\
              A música que vais cantar irá aparecer no topo do ecrã, podes remover a tua inscrição tocando em CANCELAR.<br />\
              Podes pesquisar por músicas tocando em PESQUISAR <span style="color:orange">(Ainda não implementado)</span>,\
              ou ver a música que está a ser cantada tocando em A TOCAR.\
            </span>',
            null, {ok: 'Fechar', width: '800px'}); break;
          case 'pedidos': bar.popup.alert('CONTA<br /><br />\
            <span style="display: inline-block; text-align: left;">\
              Este ecrã mostra a lista de todos os artigos pedidos.<br >\<br >\
              Toca no nome ou na imagem do artigo para ver a sua descrição.\
            </span>',
            null, {ok: 'Fechar', width: '800px'}); break;
        }
      }
    }
  },
  page: {
    current: "", //current open page
    open: function (name) {
      var current = bar.page.current;
      if (name == "") name = "main"; //name for empty hash page
      //page has actualy changed
      if (name != current) {
        var callBack = false;
        //if there's a close() method for the old page, it must return true
        if (!bar.pages[current] || !bar.pages[current].close || bar.pages[current].close(name)) {
          //if there's an open() method for the page, it must return true or a callback
          if ((!bar.pages[name] || !bar.pages[name].open || (callBack = bar.pages[name].open(current)))) {
            if (current) $("#"+current+"Page").hide();
            $("#"+name+"Page").fadeIn(bar.pages[name] && bar.pages[name].fadeInEnd);
            bar.page.current = name;
            if (callBack && callBack.call) callBack(current);
          }
          else window.location = '#'+(current == "main" ? "" : current);
        }
        else window.location = '#'+(current == "main" ? "" : current);
      }
    },
    update: function () { bar.page.open(window.location.hash.replace(/^#/, '')); }
  },
  popup: {
    open: false,
    callback: false,
    css: {},
    alert: function (text, callback, options) {
      if (!options) options = {};
      options.alert = true;
      return bar.popup.confirm(text, callback, options);
    },
    confirm: function (text, callback, options) {
      bar.popup.open = true;
      if (!options) options = {};
      $("#popupOKButton").html(options.ok || "OK");
      $("#popupCancelButton").html(options.cancel || "Cancelar");
      var popup = $("#popup");
      popup.css("width", options.width || 710);
      popup.css("margin-top", options.marginTop || '0');
      //restore css
      for (i in bar.popup.css) popup.css(i, bar.popup.css[i]); bar.popup.css = {};
      //save old css and apply new css
      if (options.css) for (i in options.css) {
        bar.popup.css[i] = popup.css(i);
        popup.css(i, options.css[i]);
      }
      if (options.alert) $("#popupCancelButton").hide();
      else $("#popupCancelButton").show();
      $("#popupContainer").stop();
      $("#popupContainer").fadeIn(150);
      $("#popupText").html(text+(!options.nobr ? '<br /><br />' : ''));
      bar.popup.callback = callback;
    },
    close: function (result) {
      bar.popup.open = false;
      $("#popupContainer").fadeOut(150, function () {
        //when the popup closes, we don't want any text on it (cancel this if it was opened meanwhile)
        if (!bar.popup.open) $("#popupText").html("");
      });
      if (bar.popup.callback) bar.popup.callback(result);
    }
  },
  req: {
    total: 0,
    confirmed: function () {
      for (var i in bar.reqs) totalReqs[i] = (totalReqs[i] || 0) + bar.reqs[i];
      bar.req.clear();
      bar.pages.menu.exitConfirmed = false;
      bar.popup.alert("O teu pedido foi registado com sucesso.<br />Este irá ser servido em breve.", function () {
        window.location = '#';
      })
    },
    clear: function () {
      for (i in bar.reqs) bar.req.rem(i);
      bar.req.total = 0;
    },
    dec: function (id) {
      if (bar.reqs[id] > 1) bar.reqs[id]--;
      else delete(bar.reqs[id]);
      bar.req.updateAmount(id);
    },
    inc: function (id) {
      if (bar.reqs[id]) bar.reqs[id]++;
      else bar.reqs[id] = 1;
      bar.req.updateAmount(id);
    },
    rem: function (id) {
      delete(bar.reqs[id]);
      bar.req.updateAmount(id);
    },
    getAmount: function (id) {
      return bar.reqs[id] ? bar.reqs[id] : 0;
    },
    updateAmount: function (id) {
      var amount = bar.req.getAmount(id);
      $('#itemQtt'+id).html(amount);
      if (amount) {
        $('#itemDec'+id).show();
        var par = $('#itemDec'+id).parent();
        par.addClass("link");
        par.addClass("buttonRed");
        par.removeClass("itemDecDisabled");
        par.addClass("itemDec");
      }
      else {
        $('#itemDec'+id).hide();
        var par = $('#itemDec'+id).parent();
        par.removeClass("link");
        par.removeClass("buttonRed");
        par.removeClass("itemDec");
        par.addClass("itemDecDisabled");
      }
      bar.req.updateReqList();
    },
    updateReqList: function () {
      var reqListBody = $("#reqListBody"), total = 0;
      reqListBody.empty();
      for (i in bar.reqs) {
        var item = bar.item.get(i);
        reqListBody.append('<tr><td>'+item.name+'</td><td>x'+bar.reqs[i]+'</td><td class="link reqRem buttonRed" onclick="bar.req.rem('+i+')">X</td></tr>');
        total += item.price * bar.reqs[i];
      }
      bar.req.total = total;
      $("#reqListTotal").html('TOTAL: '+total.toFixed(2)+'€');
      bar.pages.menu.updateSize();
    },
    row: function (item, amount) {
      return '<tr id="item'+item.id+'"><td>#'+item.id+'</td>\
      <td'+(item.img ? ' class="link" onclick="bar.item.showDescription('+item.id+')"' : '')+'>'+(item.img ? '<img alt="" style="border-radius: 10px; vertical-align: middle" src="images/'+item.img+'" />' : '')+'</td>\
      <td class="link" style="width:100%" onclick="bar.item.showDescription('+item.id+')">'+item.name+'<img class="reqInfoIcon" src="images/info.png" /></td>\
      <td>'+item.price.toFixed(2)+'€</td>\
      <td>x'+amount+'</td>\
      <td>'+(item.price*amount).toFixed(2)+'€</td>\
      </tr>';
    }
  },
  reqs: {}
};
var totalReqs = {};

function lock() {
  $("#unlocked").fadeOut(200, function () { $("#well").fadeIn(400); });
}
function unlock(cb) {
  $("#well").fadeOut(200, function () { $("#unlocked").fadeIn(400); if (cb) cb(); });
}

window.addEventListener("hashchange", bar.page.update, true);
$(function() {
  //persistent data
  if (sessionStorage.totalReqs) totalReqs = JSON.parse(sessionStorage.totalReqs);
  if (sessionStorage.chosenMusic) bar.pages.karaoke.chosenMusic = JSON.parse(sessionStorage.chosenMusic);
  if (sessionStorage.reqTotal) bar.req.total = JSON.parse(sessionStorage.reqTotal);
  if (sessionStorage.reqs) bar.reqs = JSON.parse(sessionStorage.reqs);
  
  //show active page
  bar.page.update();

  //locked
  if (sessionStorage.unlocked == 'true') $("#well").hide();
  else $("#unlocked").hide();
  
  //event handlers
  $(".helpButton").click(function () { window.location = '#help'; });
  $(".backButton").click(function () { window.location = '#'; });
  $(".lockButton").click(lock);
  $("#popupOKButton").click(function () { bar.popup.close(true); });
  $("#popupCancelButton").click(function () { bar.popup.close(false); });
	$("#slider").draggable({
		axis: 'x',
		containment: 'parent',
    revert: true,
		drag: function(event, ui) {
			if (ui.position.left > 550) unlock();
		},
		stop: function(event, ui) {
			if (ui.position.left < 551) $(this).animate({left: 0})
		}
	});
  //persistent data
  $(window).bind('beforeunload', function() {
    sessionStorage.totalReqs = JSON.stringify(totalReqs);
    sessionStorage.chosenMusic = bar.pages.karaoke.chosenMusic;
    sessionStorage.reqTotal = bar.req.total;
    sessionStorage.reqs = JSON.stringify(bar.reqs);
    sessionStorage.unlocked = $("#unlocked").is(":visible");
  });
});
