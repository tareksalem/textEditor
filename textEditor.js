//function to start textEditor
function textEditor(options) {
    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    document.head.appendChild(stylesheet);
    window.addEventListener("load", function () {
        //require the text area and form
        const textarea = document.querySelector(options.selector);
        const form = document.querySelector(options.form);
        const containerFrame = document.createElement("div");
        textarea.style.display = "none";
        //obgject contains the attributes of textarea
        const attributes = {
            class: textarea.className,
            id: textarea.id
        };
        const editor = document.createElement("iframe");



        for (var prop in attributes) {
            editor.setAttribute(prop, attributes[prop]);
        }
        textarea.style.border = "1px solid #cecece"; containerFrame.appendChild(editor);
        form.insertBefore(containerFrame, textarea);
        editor.contentDocument.designMode = "on";
        var editorTools = {
            bold: {
                element: document.createElement("i"),
                classes: "icon-tool fa fa-bold",
                title: "bold",
                data: "bold",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }

            },
            italic: {
                element: document.createElement("i"),
                classes: "icon-tool fa fa-italic",
                title: "italic",
                data: "italic",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            fontSize: {
                element: document.createElement("i"),
                classes: "icon-tool fa fa-text-width",
                title: "font size",
                data: "fontSize",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        var promp = prompt("enter the font size");
                        editor.contentDocument.execCommand(command, false, promp);
                    })
                }
            },
            ol: {
                element: document.createElement("i"),
                classes: "icon-tool fa fa-list-ol",
                title: "order list",
                data: "insertOrderedList",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            ul: {element: document.createElement("i"),
                classes: "icon-tool fa fa-list-ul",
                title: "un order list",
                data: "insertUnorderedList",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            alignRight: {element: document.createElement("i"),
                classes: "icon-tool fa fa-align-right",
                title: "text align right",
                data: "justifyRight",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            alignLeft: {element: document.createElement("i"),
                classes: "icon-tool fa fa-align-left",
                title: "text align left",
                data: "justifyLeft",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            alignCenter: {element: document.createElement("i"),
                classes: "icon-tool fa fa-align-center",
                title: "text align center",
                data: "justifyCenter",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            alignJustify: {element: document.createElement("i"),
                classes: "icon-tool fa fa-align-justify",
                title: "text align jsutify",
                data: "justifyFull",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            underLine: {element: document.createElement("i"),
                classes: "icon-tool fa fa-underline",
                title: "underline",
                data: "underline",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            strikethrough: {element: document.createElement("i"),
                classes: "icon-tool fa fa-strikethrough",
                title: "undo",
                data: "strikeThrough",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            indent: {element: document.createElement("i"),
                classes: "icon-tool fa fa-indent",
                title: "indent space",
                data: "indent",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            outdent: {element: document.createElement("i"),
                classes: "icon-tool fa fa-outdent",
                title: "outdent space",
                data: "outdent",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            hr: {element: document.createElement("i"),
                classes: "icon-tool",
                title: "Horizontal Rule",
                data: "insertHorizontalRule",
                content: "Horizontal Rule",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            heading: {
                element: document.createElement("select"),
                classes: "icon-tool",
                title: "heading",
                style: "width:200px",
                data: "formatBlock",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("change", function () {
                        editor.contentDocument.execCommand(command, false, element.value);
                        console.log(element.value);

                    })
                },
                childs: {
                    option1: {
                        option: document.createElement("option"),
                        content: "heading1",
                        style: "font-size:28px",
                        value: "h1"
                    },
                    option2: {
                        option: document.createElement("option"),
                        content: "heading2",
                        style: "font-size:24px",
                        value: "h2"
                    },
                    option3: {
                        option: document.createElement("option"),
                        content: "heading3",
                        style: "font-size:22px",
                        value: "h3"
                    },
                    option4: {
                        option: document.createElement("option"),
                        content: "heading4",
                        style: "font-size:20px",
                        value: "h4"
                    },
                    option5: {
                        option: document.createElement("option"),
                        content: "heading5",
                        style: "font-size:18px",
                        value: "h5"
                    },
                    option6: {
                        option: document.createElement("option"),
                        content: "heading6",
                        style: "font-size:16px",
                        value: "h6"
                    }
                }
            },
            undo: {element: document.createElement("i"),
                classes: "icon-tool fa fa-undo",
                title: "undo",
                data: "undo",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            redo: {element: document.createElement("i"),
                classes: "icon-tool fa fa-repeat",
                title: "redo",
                data: "redo",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            copy: {element: document.createElement("i"),
                classes: "icon-tool fa fa-copy",
                title: "copy",
                data: "copy",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            cut: {element: document.createElement("i"),
                classes: "icon-tool fa fa-cut",
                title: "cut",
                data: "cut",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            subscript: {element: document.createElement("i"),
                classes: "icon-tool fa fa-subscript",
                title: "subscript",
                data: "subscript",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            superscript: {element: document.createElement("i"),
                classes: "icon-tool fa fa-superscript",
                title: "superscript",
                data: "superscript",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            paragraph: {element: document.createElement("i"),
                classes: "icon-tool fa fa-paragraph",
                title: "paragraph",
                data: "insertParagraph",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            link: {element: document.createElement("i"),
                classes: "icon-tool fa fa-link",
                title: "link",
                data: "createLink",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        var promp = prompt("enter the link")
                        editor.contentDocument.execCommand(command, false, promp);
                    })
                }
            },
            unlink: {element: document.createElement("i"),
                classes: "icon-tool fa fa-unlink",
                title: "un link",
                data: "unlink",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        editor.contentDocument.execCommand(command, false, null);
                    })
                }
            },
            insertImg: {
                element: document.createElement("i"),
                classes: "icon-tool, fa fa-file-image-o",
                title: "insert an image",
                data: "insertImage",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("click", function () {
                        var promp = prompt("enter the link of image");
                        editor.contentDocument.execCommand(command, false, promp);
                    });
                }
            },
            fontName: {
                element: document.createElement("select"),
                classes: "icon-tool",
                title: "heading",
                data: "fontName",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("change", function () {
                        editor.contentDocument.execCommand(command, false, element.value);
                        console.log(element.value);
                    })
                },
                childs: {
                    option1: {
                        option: document.createElement("option"),
                        content: "Arial",
                        style: "font-family:Arial",
                        value: "Arial"
                    },
                    option2: {
                        option: document.createElement("option"),
                        content: "Comic Sans MS",
                        style: "font-family: Comic Sans MS",
                        value: "Comic Sans Ms"
                    },
                    option3: {
                        option: document.createElement("option"),
                        content: "Courier",
                        style: "font-family:Courier",
                        value: "Courier"
                    },
                    option4: {
                        option: document.createElement("option"),
                        content: "Georgia",
                        style: "font-family:Georgia",
                        value: "Georiga"
                    },
                    option5: {
                        option: document.createElement("option"),
                        content: "Tahoma",
                        style: "font-family:Tahoma",
                        value: "Tahoma"
                    },
                    option6: {
                        option: document.createElement("option"),
                        content: "Times New Roamn",
                        style: "font-family:Times New Roman",
                        value: "Times New Roman"
                    },
                    verdana: {
                        option: document.createElement("option"),
                        content: "Verdana",
                        style: "font-family:Verdana",
                        value: "Verdana"
                    }
                }
            },
            color: {
                element: document.createElement("div"),
                type: "color",
                content: "font color ",
                title: "font color ",
                input: document.createElement("input"),
                data: "foreColor",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("change", function () {
                        editor.contentDocument.execCommand(command, false, element.value);
                        console.log(element.value);
                    });
                }
            },
            backgroundColor: {
                element: document.createElement("div"),
                type: "color",
                content: "background color ",
                title: "background color ",
                input: document.createElement("input"),
                data: "hiliteColor",
                func: function(element, command) {
                    element = this.element;
                    command = this.data;
                    element.addEventListener("change", function () {
                        editor.contentDocument.execCommand(command, false, element.value);

                    });
                }
            }
        };
        //for loop for editor tools object
        for (var element in editorTools) {
            editorTools[element].element.setAttribute("class", editorTools[element].classes);
            editorTools[element].element.setAttribute("title", editorTools[element].title);
            editorTools[element].element.textContent = editorTools[element].content;
            editorTools.color.input.type = editorTools.color.type;
            editorTools.color.element.textContent = editorTools.color.content;
            editorTools.color.input.addEventListener("change", function () {
                editorTools.color.element.value = editorTools.color.input.value;
            });
            editorTools.color.element.append(editorTools.color.input);
            editorTools.backgroundColor.input.type = editorTools.backgroundColor.type;
            editorTools.backgroundColor.element.textContent = editorTools.backgroundColor.content;
            editorTools.backgroundColor.element.append(editorTools.backgroundColor.input);
            editorTools.backgroundColor.input.addEventListener("change", function () {
                editorTools.backgroundColor.element.value = editorTools.backgroundColor.input.value;
            });
            editorTools[element].element.setAttribute("data-command", editorTools[element].data);
            editorTools[element].element.style.cssText = "padding:8px;background-color:white;margin:5px;border:1px solid #cecece;cursor:pointer;border-radius: 5px;font-size:13px;";
            editorTools.color.element.style.display = "inline-block";
            editorTools.backgroundColor.element.style.display = "inline-block";
            editorTools[element].element.style.cssText += editorTools[element].style;
            for (var op in editorTools[element].childs) {
                editorTools[element].childs[op].option.value = editorTools[element].childs[op].value;
                editorTools[element].childs[op].option.type = editorTools[element].childs[op].type;
                editorTools[element].childs[op].option.textContent = editorTools[element].childs[op].content;
                editorTools[element].childs[op].option.style.cssText += editorTools[element].childs[op].style;
                editorTools[element].childs[op].option.style.cssText += "cursor: pointer;padding:10px;margin:10px";
                editorTools[element].element.appendChild(editorTools[element].childs[op].option)
            }
            editorTools[element].element.addEventListener("mouseover", function (event) {
                event.target.style.backgroundColor = "rgb(232, 232, 232)";
                event.target.addEventListener("mouseout", function (event) {
                    this.style.backgroundColor = "white";
                });
            });
            //function to execute the command
            editorTools[element].func()
        }

        var container = document.createElement("div");
        container.style.cssText = "border:1px solid #cecece;margin-bottom:10px;background-color:#f3f3f3;"
        container.style.width = editor.clientWidth;
        var arr = [];
        for (var element in editorTools) {
            arr.push(editorTools[element].element);
        }
        for (var i = 0; i < arr.length; i += 2) {
            var containerIcons = document.createElement("div");
            var slices =  arr.slice(i, i + 2);
            for (var x = 0; x < slices.length; x++) {
                containerIcons.append(slices[x]);
            }
            containerIcons.style.cssText = "padding:0px 5px 1px 5px;border-right:1px solid #cecece;display:inline-block;border-bottom:1px solid #cecece;overflow:hidden;";
            container.appendChild(containerIcons);
        }

        containerFrame.insertBefore(container, editor);
        form.addEventListener("submit", function () {
            textarea.value = editor.contentDocument.body.innerHTML;
        });
    });
}
