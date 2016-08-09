$(document).ready(function() {
                  
                  var slide = [("#clarkpic"), ("#markpic"), ("#williepic"), ("#davepic"), ("#schotterpic")];
                  var slideText = [("#clarktext"), ("#markcontainer"), ("#willietext"), ("#davetext"), ("#schottertext"), ("#memberstext")];
                  
                 
                  $(slide[0]).click(function() {
                                       $(slideText[1]).css({visibility: "hidden"});
                                    $(slideText[2]).css({visibility: "hidden"});
                                    $(slideText[3]).css({visibility: "hidden"});
                                    $(slideText[4]).css({visibility: "hidden"});
                                    $(slideText[5]).css({visibility: "hidden"});
                                    $(slideText[0]).css({visibility: "visible"});
                                       });
                  $(slide[1]).click(function() {
                                    $(slideText[0]).css({visibility: "hidden"});
                                    $(slideText[2]).css({visibility: "hidden"});
                                    $(slideText[3]).css({visibility: "hidden"});
                                    $(slideText[4]).css({visibility: "hidden"});
                                    $(slideText[5]).css({visibility: "hidden"});
                                    $(slideText[1]).css({visibility: "visible"});
                                    });
                  $(slide[2]).click(function() {
                                    $(slideText[0]).css({visibility: "hidden"});
                                    $(slideText[1]).css({visibility: "hidden"});
                                    $(slideText[3]).css({visibility: "hidden"});
                                    $(slideText[4]).css({visibility: "hidden"});
                                    $(slideText[5]).css({visibility: "hidden"});
                                    $(slideText[2]).css({visibility: "visible"});
                                    });
                  $(slide[3]).click(function() {
                                    $(slideText[0]).css({visibility: "hidden"});
                                    $(slideText[1]).css({visibility: "hidden"});
                                    $(slideText[2]).css({visibility: "hidden"});
                                    $(slideText[4]).css({visibility: "hidden"});
                                    $(slideText[5]).css({visibility: "hidden"});
                                    $(slideText[3]).css({visibility: "visible"});
                                    });
                  $(slide[4]).click(function() {
                                    $(slideText[0]).css({visibility: "hidden"});
                                    $(slideText[1]).css({visibility: "hidden"});
                                    $(slideText[2]).css({visibility: "hidden"});
                                    $(slideText[3]).css({visibility: "hidden"});
                                    $(slideText[5]).css({visibility: "hidden"});
                                    $(slideText[4]).css({visibility: "visible"});
                                    });
                  });