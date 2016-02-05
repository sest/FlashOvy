var View = Class.extend({

    init: function() {
        this.elem = Dom.create("div", document.body, [".View", "view"]);
        this.initView();
        this.initEvents();
        this.initController()
    },

    initView: function() {
        this.pmContainer = Dom.create("div", this.elem, [".PageManager", "#mainPM"]);
        this.pmContainer.style.zIndex = 50;
        this.pm = new PageManager(this.pmContainer,0,true,true);
        this.pm.start();
    },

    initController:function(){
      Model.setHomeURL("home");
      AddressController.init();
    },

    initEvents:function(){
        Model.addEventListener(ModelEvent.DEFAULT_VIEW_CHANGED, this.viewChangedHandler.bind(this));
        this.resizeEventID = this.resize.bind(this);
        this.orientationEventID = this.orientationchange.bind(this);
        window.addEventListener("resize", this.resizeEventID);
        window.addEventListener("orientationchange", this.orientationEventID);


        this.resize();
    },

    viewChangedHandler: function() {
        setTimeout(this.resizeEventID, 100);
    },

    orientationchange: function() {
        setTimeout(this.resizeEventID, 100);
    },

    resize: function() {
       //
    },
});
