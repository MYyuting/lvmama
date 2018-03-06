(function($, window, document, undefined) {
    //瀹氫箟鍒嗛〉绫�
    function Paging(element, options) {
        this.element = element;
        //浼犲叆褰㈠弬
        this.options = {
            pageNo: options.pageNo||1,
            totalPage: options.totalPage,
            totalSize:options.totalSize,
            callback:options.callback
        };
        //鏍规嵁褰㈠弬鍒濆鍖栧垎椤礹tml鍜宑ss浠ｇ爜
        this.init();
    }
    //瀵筆aging鐨勫疄渚嬪璞℃坊鍔犲叕鍏辩殑灞炴€у拰鏂规硶
    Paging.prototype = {
        constructor: Paging,
        init: function() {
            this.creatHtml();
            this.bindEvent();
        },
        creatHtml: function() {
            var me = this;
            var content = "";
            var current = me.options.pageNo;
            var total = me.options.totalPage;
            var totalNum = me.options.totalSize;
            content += "<a id=\"firstPage\"><首页</a><a id='prePage'>上一页</a>";
            //鎬婚〉鏁板ぇ浜�6鏃跺€�
            if(total > 6) {
                //褰撳墠椤垫暟灏忎簬5鏃舵樉绀虹渷鐣ュ彿
                if(current < 5) {
                    for(var i = 1; i < 6; i++) {
                        if(current == i) {
                            content += "<a class='current'>" + i + "</a>";
                        } else {
                            content += "<a>" + i + "</a>";
                        }
                    }
                    content += ". . .";
                    content += "<a>"+total+"</a>";
                } else {
                    //鍒ゆ柇椤电爜鍦ㄦ湯灏剧殑鏃跺€�
                    if(current < total - 3) {
                        for(var i = current - 2; i < current + 3; i++) {
                            if(current == i) {
                                content += "<a class='current'>" + i + "</a>";
                            } else {
                                content += "<a>" + i + "</a>";
                            }
                        }
                        content += ". . .";
                        content += "<a>"+total+"</a>";
                        //椤电爜鍦ㄤ腑闂撮儴鍒嗘椂鍊�
                    } else {
                        content += "<a>1</a>";
                        content += ". . .";
                        for(var i = total - 4; i < total + 1; i++) {
                            if(current == i) {
                                content += "<a class='current'>" + i + "</a>";
                            } else {
                                content += "<a>" + i + "</a>";
                            }
                        }
                    }
                }
                //椤甸潰鎬绘暟灏忎簬6鐨勬椂鍊�
            } else {
                for(var i = 1; i < total + 1; i++) {
                    if(current == i) {
                        content += "<a class='current'>" + i + "</a>";
                    } else {
                        content += "<a>" + i + "</a>";
                    }
                }
            }
            content += "<a id='nextPage'>下一页</a>";
            content += "<a id=\"lastPage\">尾页></a>";
            content += "<span class='totalPages'> 共<span>"+total+"</span>页</span>";
            content += "<span class='totalSize'> 总共<span>"+totalNum+"</span>条信息</span>";
            me.element.html(content);
        },
        //娣诲姞椤甸潰鎿嶄綔浜嬩欢
        bindEvent: function() {
            var me = this;
            me.element.off('click', 'a');
            me.element.on('click', 'a', function() {
                var num = $(this).html();
                var id=$(this).attr("id");
                if(id == "prePage") {
                    if(me.options.pageNo == 1) {
                        me.options.pageNo = 1;
                    } else {
                        me.options.pageNo = +me.options.pageNo - 1;
                    }
                } else if(id == "nextPage") {
                    if(me.options.pageNo == me.options.totalPage) {
                        me.options.pageNo = me.options.totalPage
                    } else {
                        me.options.pageNo = +me.options.pageNo + 1;
                    }

                } else if(id =="firstPage") {
                    me.options.pageNo = 1;
                } else if(id =="lastPage") {
                    me.options.pageNo = me.options.totalPage;
                }else{
                    me.options.pageNo = +num;
                }
                me.creatHtml();
                if(me.options.callback) {
                    me.options.callback(me.options.pageNo);
                }
            });
        }
    };
    //閫氳繃jQuery瀵硅薄鍒濆鍖栧垎椤靛璞�
    $.fn.paging = function(options) {
        return new Paging($(this), options);
    }
})(jQuery, window, document);