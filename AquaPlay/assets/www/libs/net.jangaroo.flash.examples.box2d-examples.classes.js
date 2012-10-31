var refBolhas;
var id = 0;
var j = 0;
var tempo;
var tempoJogo;
var TEMPO_MAXIMO_JOGO = 120;
var TEMPO_ESTOURA_BOLHA = 6;
var NUMBER_TELA = 0;
var QUANT_CAIXAS = 5;
var arrayCaixinhas = new Array();
var my_m_physScale;
var posArray = 0;
var DentrCaixa = new Array();
var tempoFinalPartida = 0;
var db;
var controleBtReiniciar = 0;
var jogoEmExecucao = 0;
var user = "";
var latitude = "";
var longitude = "";
// class CanvasTest
joo.classLoader.prepare("package",
    "public class CanvasTest", 1, function ($$private) {
        var as = joo.as;
        return[
            "public static function main", function (id) {
                var canvasElement = as(window.document.getElementById(id), js.HTMLCanvasElement);
                canvasElement.width = 100;
                canvasElement.height = 100;
                var context = as(canvasElement.getContext("2d"), js.CanvasRenderingContext2D);
                context.fillRect(10, 10, 90, 90);
                var imageData = context.getImageData(0, 0, 100, 100);
                canvasElement.width = 200;
                canvasElement.height = 200;
                context.putImageData(imageData, 0, 0);
            },
        ];
    }, ["main"], ["js.HTMLCanvasElement", "js.CanvasRenderingContext2D"], "0.8.0", "0.8.1"
);
// class General.FpsCounter
joo.classLoader.prepare(
    "package General",
    "public class FpsCounter extends flash.display.Sprite", 6, function ($$private) {
        ;
        return[function () {
            joo.classLoader.init(flash.system.System);
        },
            "public function FpsCounter", function () {
                this.super$6();
                this.textBox$6 = new flash.text.TextField();
                //this.textBox$6.text = "...";
                this.textBox$6.textColor = 0xaa1144;
                this.textBox$6.selectable = false;
                this.textBox2$6 = new flash.text.TextField();
               // this.textBox2$6.text = "...";
                this.textBox2$6.width = 150;
                this.textBox2$6.textColor = 0xaa1144;
                this.textBox2$6.selectable = false;
                this.textBox2$6.y = 15;
                this.textBox3$6 = new flash.text.TextField();
                //this.textBox3$6.text = "...";
                this.textBox3$6.textColor = 0xaa1144;
                this.textBox3$6.selectable = false;
                this.textBox3$6.y = 30;
                this.oldT$6 = flash.utils.getTimer();
                this.addChild(this.textBox$6);
                this.addChild(this.textBox2$6);
                this.addChild(this.textBox3$6);
            },
            "public function update", function () {
                var newT = flash.utils.getTimer();
                var f1 = newT - this.oldT$6;
                this.mfpsCount$6 += f1;
               /* if (this.avgCount$6 < 1) {
                    this.textBox$6.text = String(Math.round(1000 / (this.mfpsCount$6 / 30)) + " fps average");
                    this.avgCount$6 = 30;
                    this.mfpsCount$6 = 0;
                }*/
                this.avgCount$6--;
                this.oldT$6 = flash.utils.getTimer();
            //    this.textBox3$6.text = Math.round(flash.system.System.totalMemory / (1024 * 1024)) + " MB used";
            aceleracao();	
            },
            "public function updatePhys", function (oldT2) {
                var newT = flash.utils.getTimer();
                var f1 = newT - oldT2;
                this.mfpsCount2$6 += f1;
               /* if (this.avgCount2$6 < 1) {
                    this.textBox2$6.text = String("Physics step: " + Math.round(this.mfpsCount2$6 / 30) + " ms (" + Math.round(1000 / (this.mfpsCount2$6 / 30)) + " fps)");
                    this.avgCount2$6 = 30;
                    this.mfpsCount2$6 = 0;
                }*/
                this.avgCount2$6--;
            },
            "public function updateEnd", function () {
            },
            "private var", {textBox:null},
            "private var", {textBox2:null},
            "private var", {textBox3:null},
            //"private var", {mfpsCount:0},
           // "private var", {mfpsCount2:0},
          //  "private var", {avgCount:30},
            "private var", {avgCount2:30},
            "private var", {oldT:0},
        ];
    }, [], ["flash.display.Sprite", "flash.text.TextField", "String", "Math", "flash.system.System"], "0.8.0", "0.8.1"
);
// class General.FRateLimiter
joo.classLoader.prepare(
    "package General",
    "public class FRateLimiter", 1, function ($$private) {
        ;
        return[
            "static public function limitFrame", function (maxFPS) {
                var fTime = 1000 / maxFPS;
                while (Math.abs($$private.newT - $$private.oldT) < fTime) {
                    $$private.newT = flash.utils.getTimer();
                }
                $$private.oldT = flash.utils.getTimer();
            },
            "private static var", {oldT:function () {
                return(flash.utils.getTimer());
            }},
            "private static var", {newT:function () {
                return($$private.oldT);
            }},
        ];
    }, ["limitFrame"], ["Math"], "0.8.0", "0.8.1"
);
// class General.Input
joo.classLoader.prepare(
    "package General",
    "public class Input", 1, function ($$private) {
        var $$bound = joo.boundMethod;
        return[function () {
            joo.classLoader.init(flash.events.KeyboardEvent, flash.events.MouseEvent, flash.events.Event);
        },
            "public function Input", function (stageMc) {
                General.Input.m_stageMc = stageMc;
                General.Input.ascii = new Array(222);
                this.fillAscii$1();
                $$private.keyState = new Array(222);
                $$private.keyArr = new Array();
                for (var i = 0; i < 222; i++) {
                    $$private.keyState[i] = new int(0);
                    if (General.Input.ascii[i] != undefined) {
                        $$private.keyArr.push(i);
                    }
                }
                $$private.bufferSize = 5;
                $$private.keyBuffer = new Array($$private.bufferSize);
                for (var j = 0; j < $$private.bufferSize; j++) {
                    $$private.keyBuffer[j] = new Array(0, 0);
                }
                stageMc.stage.addEventListener(flash.events.KeyboardEvent.KEY_DOWN, $$bound(this, "keyPress"), false, 0, true);
                stageMc.stage.addEventListener(flash.events.KeyboardEvent.KEY_UP, $$bound(this, "keyRelease"), false, 0, true);
                stageMc.stage.addEventListener(flash.events.MouseEvent.MOUSE_DOWN, $$bound(this, "mousePress"), false, 0, true);
                stageMc.stage.addEventListener(flash.events.MouseEvent.CLICK, $$bound(this, "mouseRelease"), false, 0, true);
                stageMc.stage.addEventListener(flash.events.MouseEvent.MOUSE_MOVE, $$bound(this, "mouseMove"), false, 0, true);
                stageMc.stage.addEventListener(flash.events.Event.MOUSE_LEAVE, $$bound(this, "mouseLeave"), false, 0, true);
                General.Input.mouse.graphics.lineStyle(0.1, 0, 100);
                General.Input.mouse.graphics.moveTo(0, 0);
                General.Input.mouse.graphics.lineTo(0, 0.1);
            },
            "static public function update", function () {
                for (var i = 0; i < $$private.keyArr.length; i++) {
                    if ($$private.keyState[$$private.keyArr[i]] != 0) {
                        $$private.keyState[$$private.keyArr[i]]++;
                    }
                }
                for (var j = 0; j < $$private.bufferSize; j++) {
                    $$private.keyBuffer[j][1]++;
                }
                General.Input.mouseReleased = false;
                General.Input.mousePressed = false;
                General.Input.mouseOver = false;
            },
            "public function mousePress", function (e) {
                General.Input.mousePressed = true;
                General.Input.mouseDown = true;
                General.Input.mouseDragX = 0;
                General.Input.mouseDragY = 0;
            },
            "public function mouseRelease", function (e) {
                General.Input.mouseDown = false;
                General.Input.mouseReleased = true;
            },
            "public function mouseLeave", function (e) {
                General.Input.mouseReleased = General.Input.mouseDown;
                General.Input.mouseDown = false;
            },
            "public function mouseMove", function (e) {
                if (General.Input.mouseDown != e.buttonDown) {
                    General.Input.mouseDown = e.buttonDown;
                    General.Input.mouseReleased = !e.buttonDown;
                    General.Input.mousePressed = e.buttonDown;
                    General.Input.mouseDragX = 0;
                    General.Input.mouseDragY = 0;
                }
                General.Input.mouseX = e.stageX - General.Input.m_stageMc.x;
                General.Input.mouseY = e.stageY - General.Input.m_stageMc.y;
                General.Input.mouseOffsetX = General.Input.mouseX - General.Input.mouse.x;
                General.Input.mouseOffsetY = General.Input.mouseY - General.Input.mouse.y;
                if (General.Input.mouseDown) {
                    General.Input.mouseDragX += General.Input.mouseOffsetX;
                    General.Input.mouseDragY += General.Input.mouseOffsetY;
                }
                General.Input.mouse.x = General.Input.mouseX;
                General.Input.mouse.y = General.Input.mouseY;
            },
            "static public function getKeyHold", function (k) {
                return Math.max(0, $$private.keyState[k]);
            },
            "static public function isKeyDown", function (k) {
                return($$private.keyState[k] > 0);
            },
            "static public function isKeyPressed", function (k) {
                General.Input.timeSinceLastKey = 0;
                return($$private.keyState[k] == 1);
            },
            "static public function isKeyReleased", function (k) {
                return($$private.keyState[k] == -1);
            },
            "static public function isKeyInBuffer", function (k, i, t) {
                return($$private.keyBuffer[i][0] == k && $$private.keyBuffer[i][1] <= t);
            },
            "public function keyPress", function (e) {
                $$private.keyState[e.keyCode] = Math.max($$private.keyState[e.keyCode], 1);
                General.Input.lastKey = e.keyCode;
            },
            "public function keyRelease", function (e) {
                $$private.keyState[e.keyCode] = -1;
                for (var i = $$private.bufferSize - 1; i > 0; i--) {
                    $$private.keyBuffer[i] = $$private.keyBuffer[i - 1];
                }
                $$private.keyBuffer[0] = [e.keyCode, 0];
            },
            "static public function getKeyString", function (k) {
                return General.Input.ascii[k];
            },
            "private function fillAscii", function () {
                General.Input.ascii[65] = "A";
                General.Input.ascii[66] = "B";
                General.Input.ascii[67] = "C";
                General.Input.ascii[68] = "D";
                General.Input.ascii[69] = "E";
                General.Input.ascii[70] = "F";
                General.Input.ascii[71] = "G";
                General.Input.ascii[72] = "H";
                General.Input.ascii[73] = "I";
                General.Input.ascii[74] = "J";
                General.Input.ascii[75] = "K";
                General.Input.ascii[76] = "L";
                General.Input.ascii[77] = "M";
                General.Input.ascii[78] = "N";
                General.Input.ascii[79] = "O";
                General.Input.ascii[80] = "P";
                General.Input.ascii[81] = "Q";
                General.Input.ascii[82] = "R";
                General.Input.ascii[83] = "S";
                General.Input.ascii[84] = "T";
                General.Input.ascii[85] = "U";
                General.Input.ascii[86] = "V";
                General.Input.ascii[87] = "W";
                General.Input.ascii[88] = "X";
                General.Input.ascii[89] = "Y";
                General.Input.ascii[90] = "Z";
                General.Input.ascii[48] = "0";
                General.Input.ascii[49] = "1";
                General.Input.ascii[50] = "2";
                General.Input.ascii[51] = "3";
                General.Input.ascii[52] = "4";
                General.Input.ascii[53] = "5";
                General.Input.ascii[54] = "6";
                General.Input.ascii[55] = "7";
                General.Input.ascii[56] = "8";
                General.Input.ascii[57] = "9";
                General.Input.ascii[32] = "Spacebar";
                General.Input.ascii[17] = "Ctrl";
                General.Input.ascii[16] = "Shift";
                General.Input.ascii[192] = "~";
                General.Input.ascii[38] = "up";
                General.Input.ascii[40] = "down";
                General.Input.ascii[37] = "left";
                General.Input.ascii[39] = "right";
                General.Input.ascii[96] = "Numpad 0";
                General.Input.ascii[97] = "Numpad 1";
                General.Input.ascii[98] = "Numpad 2";
                General.Input.ascii[99] = "Numpad 3";
                General.Input.ascii[100] = "Numpad 4";
                General.Input.ascii[101] = "Numpad 5";
                General.Input.ascii[102] = "Numpad 6";
                General.Input.ascii[103] = "Numpad 7";
                General.Input.ascii[104] = "Numpad 8";
                General.Input.ascii[105] = "Numpad 9";
                General.Input.ascii[111] = "Numpad /";
                General.Input.ascii[106] = "Numpad *";
                General.Input.ascii[109] = "Numpad -";
                General.Input.ascii[107] = "Numpad +";
                General.Input.ascii[110] = "Numpad .";
                General.Input.ascii[45] = "Insert";
                General.Input.ascii[46] = "Delete";
                General.Input.ascii[33] = "Page Up";
                General.Input.ascii[34] = "Page Down";
                General.Input.ascii[35] = "End";
                General.Input.ascii[36] = "Home";
                General.Input.ascii[112] = "F1";
                General.Input.ascii[113] = "F2";
                General.Input.ascii[114] = "F3";
                General.Input.ascii[115] = "F4";
                General.Input.ascii[116] = "F5";
                General.Input.ascii[117] = "F6";
                General.Input.ascii[118] = "F7";
                General.Input.ascii[119] = "F8";
                General.Input.ascii[188] = ",";
                General.Input.ascii[190] = ".";
                General.Input.ascii[186] = ";";
                General.Input.ascii[222] = "'";
                General.Input.ascii[219] = "[";
                General.Input.ascii[221] = "]";
                General.Input.ascii[189] = "-";
                General.Input.ascii[187] = "+";
                General.Input.ascii[220] = "\\";
                General.Input.ascii[191] = "/";
                General.Input.ascii[9] = "TAB";
                General.Input.ascii[8] = "Backspace";
            },
            "static public var", {ascii:null},
            "static private var", {keyState:null},
            "static private var", {keyArr:null},
            "static private var", {keyBuffer:null},
            "static private var", {bufferSize:0},
            "static public var", {lastKey:0},
            "static public var", {timeSinceLastKey:0},
            "static public var", {mouseDown:false},
            "static public var", {mouseReleased:false},
            "static public var", {mousePressed:false},
            "static public var", {mouseOver:false},
            "static public var", {mouseX:0},
            "static public var", {mouseY:0},
            "static public var", {mouseOffsetX:0},
            "static public var", {mouseOffsetY:0},
            "static public var", {mouseDragX:0},
            "static public var", {mouseDragY:0},
            "static public var", {mouse:function () {
                return(new flash.display.Sprite());
            }},
            "static public var", {m_stageMc:null},
        ];
    }, ["update", "getKeyHold", "isKeyDown", "isKeyPressed", "isKeyReleased", "isKeyInBuffer", "getKeyString"], ["Array", "int", "flash.events.KeyboardEvent", "flash.events.MouseEvent", "flash.events.Event", "Math", "flash.display.Sprite"], "0.8.0", "0.8.1"
);
// class Main
joo.classLoader.prepare(
    "package",
    {SWF:{width:'355', height:'498', backgroundColor:'#292C2C', frameRate:'30'}},
    "public class Main extends flash.display.MovieClip", 7, function ($$private) {
        var $$bound = joo.boundMethod;
        return[function () {
            joo.classLoader.init(flash.text.TextFormatAlign, TestBed.TestBuoyancy, flash.events.Event, TestBed.TestPageStart, TestBed.TestRanking, TestBed.TestSucesso, TestBed.TestGameOver);
        },
            "public function Main", function () {
                this.super$7();
                this.addEventListener(flash.events.Event.ENTER_FRAME, $$bound(this, "update"), false, 0, true);
                Main.m_fpsCounter.x = 7;
                Main.m_fpsCounter.y = 5;
                this.addChildAt(Main.m_fpsCounter, 0);
                Main.m_sprite = new flash.display.Sprite();
                this.addChild(Main.m_sprite);
                this.m_input = new General.Input(Main.m_sprite);
                
                var instructions_text = new flash.text.TextField();
                var instructions_text_format = new flash.text.TextFormat("Arial", 16, 0xffffff, false, false, false);
                instructions_text_format.align = flash.text.TextFormatAlign.RIGHT;
                instructions_text.defaultTextFormat = instructions_text_format;
                instructions_text.x = 34;
                instructions_text.y = 71;
                instructions_text.width = 300;
                instructions_text.height = 30;
                
                //instructions_text.text = "Box2DFlashAS3 2.1a\n'Left'/'Right' arrows to go to previous/next example. \n'R' to reset.";
                this.addChild(instructions_text);
                
                
                Main.m_aboutText = new flash.text.TextField();
                var m_aboutTextFormat = new flash.text.TextFormat("Arial", 16, 0x00CCFF, true, false, false);
                m_aboutTextFormat.align = flash.text.TextFormatAlign.RIGHT;
                Main.m_aboutText.defaultTextFormat = m_aboutTextFormat;
                Main.m_aboutText.x = 34;
                Main.m_aboutText.y = 71;
                Main.m_aboutText.width = 300;
                Main.m_aboutText.height = 30;
                this.addChild(Main.m_aboutText);
                instructions_text.mouseEnabled = false;
                Main.m_aboutText.mouseEnabled = false;
                //limparDB();
                //limparTable();
               // alert("passouaki");
               	
                /*TESTE*/
                Main.novoteste = new flash.text.TextField();
                
                var m_aboutTextFormat = new flash.text.TextFormat("Arial", 16, 0x00CCFF, true, false, false);
                m_aboutTextFormat.align = flash.text.TextFormatAlign.RIGHT;
                Main.novoteste.defaultTextFormat = m_aboutTextFormat;
                Main.novoteste.text = "";
                Main.novoteste.x = 34;
                Main.novoteste.y = 71;
                Main.novoteste.width = 300;
                Main.novoteste.height = 30;
                this.addChild(Main.novoteste);
                Main.novoteste.mouseEnabled = false;
                
                							
				
            },
            "public function update", function (e) {
                Main.m_sprite.graphics.clear();
                if (General.Input.isKeyPressed(39)) {
                    this.m_currId++;
                    Main.m_currTest = null;
                }
                else if (General.Input.isKeyPressed(37)) {
                    this.m_currId--;
                    Main.m_currTest = null;
                }
                else if (General.Input.isKeyPressed(82)) {
                    Main.m_currTest = null;
                } else if(General.Input.isKeyPressed(118)){
                	var now = Math.round((new Date()).getTime() / 1000);
                    Main.m_currTest.destroyAr(now);
                }

                var tests = [
                	TestBed.TestPageStart,
                	TestBed.TestBuoyancy,
                    TestBed.TestGameOver,
                    TestBed.TestRanking,
                    TestBed.TestSucesso,
                 	null
                ];
                tests.length -= 1;
                var testCount = tests.length;
                this.m_currId = (this.m_currId + testCount) % testCount;
				
                if (!Main.m_currTest) {
               
                //alert(Main.m_currTest);
                    /*switch (this.m_currId) {
                        default:
                            Main.m_currTest = new tests[this.m_currId]();
                    }*/
					//alert(NUMBER_TELA)
					Main.m_currTest = new tests[NUMBER_TELA]();
					//
                }
                
              
                Main.m_currTest.Update();
                General.Input.update();
                Main.m_fpsCounter.update();
                General.FRateLimiter.limitFrame(30);
                /*
                 * chama o apagar o ar
                 */
                var now = Math.round((new Date()).getTime() / 1000);
                
                if(NUMBER_TELA == 1){
                	Main.m_currTest.destroyAr(now);
                }		
				
				/*
				* verifica se o usuário ganhou o jogo
				*/

				if(jogoEmExecucao == 1 && verificaVitoria()) {
					//faz o que se deve fazer quando ganha o jogo
					tempoFinalPartida = (now - tempoJogo);
					Main.m_currTest = null;
					NUMBER_TELA = 4;

					Main.m_currTest = null;
					DentrCaixa = null;
					DentrCaixa = new Array();

				} 

				/*
				* Método de verificar tempo do jogo, para determinar quando acabou
				*/
				
				if(jogoEmExecucao == 1){
					if (tempoJogo <= (now - TEMPO_MAXIMO_JOGO)) {	
						Main.m_currTest = null;
						/*
						* coloca a tela de acabou o jogo
						*/
						controleBtReiniciar = 1;
						NUMBER_TELA = 2;
						//alert("acabou o jogo, tempo acabou");
					}
				}
            },
            
            "static public var", {m_fpsCounter:function () {
                return(new General.FpsCounter());
            }},
            
            "public var", {m_currId:0},
            "static public var", {m_currTest:null},
            "static public var", {m_sprite:null},
            "static public var", {m_aboutText:null},
            "public var", {m_input:null},
             "public function reiniciarJogo", function () {  
                 Main.m_currTest = null;
                 NUMBER_TELA = 1;
				 Main.m_currTest = new Main.tests[NUMBER_TELA]();
            },
            
        ];
    }, [], ["flash.display.MovieClip", "flash.events.Event", "flash.display.Sprite", "General.Input", "flash.text.TextField", "flash.text.TextFormat", "flash.text.TextFormatAlign", "TestBed.TestBuoyancy", "General.FRateLimiter", "General.FpsCounter"], "0.8.0", "0.8.1"
);
// class TestBed.Test
joo.classLoader.prepare(
    "package TestBed",
    "public class Test", 1, function ($$private) {
        var as = joo.as;
        return[function () {
            joo.classLoader.init(Box2D.Dynamics.b2Body, Main, General.Input, Box2D.Dynamics.b2DebugDraw);
        },
            "public function Test", function () {
                this.mousePVec$1 = this.mousePVec$1();
                this.m_sprite = Main.m_sprite;
                var worldAABB = new Box2D.Collision.b2AABB();
                worldAABB.lowerBound.Set(-1000.0, -1000.0);
                worldAABB.upperBound.Set(1000.0, 1000.0);
                var gravity = new Box2D.Common.Math.b2Vec2(0.0, 10.0);
                var doSleep = true;
                this.m_world = new Box2D.Dynamics.b2World(gravity, doSleep);
                this.m_world.SetWarmStarting(true);
                var dbgDraw = new Box2D.Dynamics.b2DebugDraw();
                dbgDraw.SetSprite(this.m_sprite);
                dbgDraw.SetDrawScale(50.0);
                dbgDraw.SetFillAlpha(0.3);
                dbgDraw.SetLineThickness(1.0);
                dbgDraw.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit | Box2D.Dynamics.b2DebugDraw.e_jointBit);
                this.m_world.SetDebugDraw(dbgDraw);
                var wall = new Box2D.Collision.Shapes.b2PolygonShape();
                var wallBd = new Box2D.Dynamics.b2BodyDef();
                //BodyDef wallBd = new BodyDef();
                //wallBd.type = BodyType.STATIC;
    			
 
                wallBd.fixedRotation = true;
                var wallB;

                //PAREDE VERTICAL LEFT
				//espessura //altura
				wallBd.position.Set(-3.19, 4);
                //wallBd.position.Set(-95 / this.m_physScale, 360 / this.m_physScale / 2);
                
				wall.SetAsBox(3.4, 6);
               // wall.SetAsBox(100 / this.m_physScale, 360 / this.m_physScale / 2);
                wallB = this.m_world.CreateBody(wallBd);
                wallB.CreateFixture2(wall, 0.0);

                //PAREDE VERTICAL RIGHT
				wallBd.position.Set(10.3, 4);
               // wallBd.position.Set((213 + 95) / this.m_physScale, 360 / this.m_physScale / 2);
                wallB = this.m_world.CreateBody(wallBd);
                wallB.CreateFixture2(wall, 0.0);

                //PAREDE HORIZONTAL TOP
				wallBd.position.Set(2.5, -3.2);
               // wallBd.position.Set(280 / this.m_physScale / 2, -95 / this.m_physScale);
			   wall.SetAsBox(6, 3.4);
               // wall.SetAsBox(280 / this.m_physScale / 2, 100 / this.m_physScale);
                wallB = this.m_world.CreateBody(wallBd);
                wallB.CreateFixture2(wall, 0.0);

                //PAREDE HORIZONTAL BOTTON
				//comprimento e altura
				wallBd.position.Set(2.5, 13.2);
                //wallBd.position.Set(280 / this.m_physScale / 2, (300 + 95) / this.m_physScale);
                wallB = this.m_world.CreateBody(wallBd);
                wallB.CreateFixture2(wall, 0.0);
            },
            "public function Update", function () {
                this.UpdateMouseWorld();
                this.MouseDestroy();
                this.MouseDrag();
                var physStart = flash.utils.getTimer();
                this.m_world.Step(this.m_timeStep, this.m_velocityIterations, this.m_positionIterations);
                Main.m_fpsCounter.updatePhys(physStart);
                this.m_world.DrawDebugData();
            },
            "public var", {m_world:null},
            "public var", {m_bomb:null},
            "public var", {m_mouseJoint:null},
            "public var", {m_velocityIterations:10},
            "public var", {m_positionIterations:10},
            "public var", {m_timeStep:1.0 / 30.0},
            "public var", {m_physScale:30},
            "static public var", {mouseXWorldPhys:NaN},
            "static public var", {mouseYWorldPhys:NaN},
            "static public var", {mouseXWorld:NaN},
            "static public var", {mouseYWorld:NaN},
            "public var", {m_sprite:null},
            "public function UpdateMouseWorld", function () {
                TestBed.Test.mouseXWorldPhys = (General.Input.mouseX) / this.m_physScale;
                TestBed.Test.mouseYWorldPhys = (General.Input.mouseY) / this.m_physScale;
                TestBed.Test.mouseXWorld = (General.Input.mouseX);
                TestBed.Test.mouseYWorld = (General.Input.mouseY);
            },
            "public function MouseDrag", function () {
                if (General.Input.mouseDown && !this.m_mouseJoint) {
                    var body = this.GetBodyAtMouse();
                    if (body) {
                        var md = new Box2D.Dynamics.Joints.b2MouseJointDef();
                        md.bodyA = this.m_world.GetGroundBody();
                        md.bodyB = body;
                        md.target.Set(TestBed.Test.mouseXWorldPhys, TestBed.Test.mouseYWorldPhys);
                        md.collideConnected = true;
                        md.maxForce = 300.0 * body.GetMass();
                        this.m_mouseJoint = as(this.m_world.CreateJoint(md), Box2D.Dynamics.Joints.b2MouseJoint);
                        body.SetAwake(true);

                    }
                }
                if (!General.Input.mouseDown) {
                    if (this.m_mouseJoint) {
                        this.m_world.DestroyJoint(this.m_mouseJoint);
                        this.m_mouseJoint = null;
                    }
                }
                if (this.m_mouseJoint) {
                    var p2 = new Box2D.Common.Math.b2Vec2(TestBed.Test.mouseXWorldPhys, TestBed.Test.mouseYWorldPhys);
                    this.m_mouseJoint.SetTarget(p2);
                }

            },
            "public function MouseDestroy", function () {
                if (!General.Input.mouseDown && General.Input.isKeyPressed(68)) {
                    var body = this.GetBodyAtMouse(true);
                    if (body) {
                        this.m_world.DestroyBody(body);
                        return;
                    }
                }
            },
            "private var", {mousePVec:function () {
                return(new Box2D.Common.Math.b2Vec2());
            }},
            "public function GetBodyAtMouse", function (includeStatic) {
                var this$ = this;
                if (arguments.length < 1) {
                    includeStatic = false;
                }
                this.mousePVec$1.Set(TestBed.Test.mouseXWorldPhys, TestBed.Test.mouseYWorldPhys);
                var aabb = new Box2D.Collision.b2AABB();
                aabb.lowerBound.Set(TestBed.Test.mouseXWorldPhys - 0.001, TestBed.Test.mouseYWorldPhys - 0.001);
                aabb.upperBound.Set(TestBed.Test.mouseXWorldPhys + 0.001, TestBed.Test.mouseYWorldPhys + 0.001);
                var body = null;
                var fixture;

                function GetBodyCallback(fixture) {
                    var shape = fixture.GetShape();
                    if (fixture.GetBody().GetType() != Box2D.Dynamics.b2Body.b2_staticBody || includeStatic) {
                        var inside = shape.TestPoint(fixture.GetBody().GetTransform(), this$.mousePVec$1);
                        if (inside) {
                            body = fixture.GetBody();
                            return false;
                        }
                    }
                    return true;
                }

                this.m_world.QueryAABB(GetBodyCallback, aabb);
                return body;
            },
        ];
    }, [], ["Main", "Box2D.Collision.b2AABB", "Box2D.Common.Math.b2Vec2", "Box2D.Dynamics.b2World", "Box2D.Dynamics.b2DebugDraw", "Box2D.Collision.Shapes.b2PolygonShape", "Box2D.Dynamics.b2BodyDef", "General.Input", "Box2D.Dynamics.Joints.b2MouseJointDef", "Box2D.Dynamics.Joints.b2MouseJoint", "Box2D.Dynamics.b2Body"], "0.8.0", "0.8.1"
);

// class TestBed.TestGameOver
joo.classLoader.prepare(
    "package TestBed",
    "public class TestGameOver extends TestBed.Test", 2, function ($$private) {
        ;
        return[function () {
            joo.classLoader.init(Box2D.Dynamics.b2Body, Main, Math);
        },
            "public function TestGameOver", function () {
                this.super$2();
                
                Main.novoteste.text = "";
                Main.m_aboutText.text = "Game Over";
                jogoEmExecucao = 0;
                
         
				var btReiniciar = document.getElementById('reiniciar');
				var btEsquerdo = document.getElementById('esquerdo');
				var btDireito = document.getElementById('direito');
				var btRanking = document.getElementById('ranking');
				
				btReiniciar.style.display = 'block';
				btReiniciar.style.width = '100%';
				btRanking.style.display = 'none';
				btEsquerdo.style.display = 'none';
				btDireito.style.display = 'none';
                
                var m_aboutTextFormat = new flash.text.TextFormat("Arial", 30, 0x00CCFF, true, false, false);
                m_aboutTextFormat.align = flash.text.TextFormatAlign.RIGHT;
                Main.m_aboutText.defaultTextFormat = m_aboutTextFormat;
                Main.m_aboutText.x = -50;
                Main.m_aboutText.y = 200;
                Main.m_aboutText.width = 300;
                Main.m_aboutText.height = 100;
               
               controleBtReiniciar = 1;

            },
             "public function reiniciarJogo", function () {
              	
                 Main.m_currTest = null;
                 NUMBER_TELA = 1;
                 tempoJogo = 0;
				 Main.m_currTest = new Main.tests[NUMBER_TELA]();
				 
            },
            
        ];
    }, [], ["TestBed.Test", "Main", "Box2D.Common.Math.b2Vec2", "Box2D.Collision.Shapes.b2PolygonShape", "Box2D.Dynamics.b2FixtureDef", "Box2D.Dynamics.b2BodyDef", "Box2D.Dynamics.b2Body", "Box2D.Dynamics.Joints.b2RevoluteJointDef", "Math", "Box2D.Collision.Shapes.b2CircleShape", "Array"], "0.8.0", "0.8.1"
);

// class TestBed.TestRanking
joo.classLoader.prepare(
    "package TestBed",
    "public class TestRanking extends TestBed.Test", 2, function ($$private) {
        ;
        return[function () {
            joo.classLoader.init(Box2D.Dynamics.b2Body, Main, Math);
        },
            "public function TestRanking", function () {
                this.super$2();
                Main.m_aboutText.text = "Top 5";
                jogoEmExecucao = 0;
                
                var m_aboutTextFormat = new flash.text.TextFormat("Arial", 30, 0x00CCFF, true, false, false);
                m_aboutTextFormat.align = flash.text.TextFormatAlign.RIGHT;
                Main.m_aboutText.defaultTextFormat = m_aboutTextFormat;
                Main.m_aboutText.x = 34;
                Main.m_aboutText.y = 10;
                Main.m_aboutText.width = 300;
                Main.m_aboutText.height = 100;
               
                this.consultaRankingTop5();
                //limpaDadosDB();
                
                var btReiniciar = document.getElementById('reiniciar');
				var btEsquerdo = document.getElementById('esquerdo');
				var btDireito = document.getElementById('direito');
				var btRanking = document.getElementById('ranking');
				
				btReiniciar.style.display = 'block';
				btReiniciar.style.width = '100%';
				btRanking.style.display = 'none';
				btEsquerdo.style.display = 'none';
				btDireito.style.display = 'none';   
                
               
            },
             "public function consultaRankingTop5", function () {  
				setupDB(); 
             	//db = window.openDatabase("bd1", "1.0", "myBank", (1024 * 1024) * 5);
				//alert(db);
				if (db) {
								
					db.transaction(function(tx) {
					var html;
				   	
				   	var sql = "select * from ranking order by time asc limit 0, 5";
				   	tx.executeSql(sql, [], function(tx, resultado) {
				    
				    	html = " O Maiores vencedores - TOP\n\n";
				    	html += " Nome  |  Tempo | Latitude | Longitude \n\n";
				   
					    for (i = 0; i < resultado.rows.length; i++) {
							
					    	html += " " +       
					       	resultado.rows.item(i).user +   "  |   " +  
					       	resultado.rows.item(i).time +   "  |   " +  
				       		resultado.rows.item(i).latitude + "  |   " +  
				       		resultado.rows.item(i).longitude +   "\n\n";
					    }
				      
				      Main.novoteste.text = html;
				
				   }, function(e) {
				
				    console.log("falha na consulta");
				   }, function(fin) {
				
				    console.log("final");
				   });
				  }, function(err) {
				
				   console.log("erros no primeiro ");
				  }, function(fn) {
				
				   console.log("final no primeiro");
				  });
				 }
            },
              "public function reiniciarJogo", function () {  
                 Main.m_currTest = null;
                 NUMBER_TELA = 1;
				 Main.m_currTest = new Main.tests[NUMBER_TELA]();
            },
            
        ];
    }, [], ["TestBed.Test", "Main", "Box2D.Common.Math.b2Vec2", "Box2D.Collision.Shapes.b2PolygonShape", "Box2D.Dynamics.b2FixtureDef", "Box2D.Dynamics.b2BodyDef", "Box2D.Dynamics.b2Body", "Box2D.Dynamics.Joints.b2RevoluteJointDef", "Math", "Box2D.Collision.Shapes.b2CircleShape", "Array"], "0.8.0", "0.8.1"
);

// class TestBed.TestSucesso
joo.classLoader.prepare(
    "package TestBed",
    "public class TestSucesso extends TestBed.Test", 2, function ($$private) {
        ;
        return[function () {
            joo.classLoader.init(Box2D.Dynamics.b2Body, Main, Math);
        },
            "public function TestSucesso", function () {
				
                this.super$2();
                Main.m_aboutText.text = "O jogo acabou";

                jogoEmExecucao = 0;
                
				var time = tempoFinalPartida;
				

                var m_aboutTextFormat = new flash.text.TextFormat("Arial", 30, 0x00CCFF, true, false, false);
                m_aboutTextFormat.align = flash.text.TextFormatAlign.RIGHT;
                Main.m_aboutText.defaultTextFormat = m_aboutTextFormat;
                Main.m_aboutText.x = 34;
                Main.m_aboutText.y = 10;
                Main.m_aboutText.width = 300;
                Main.m_aboutText.height = 100;
                jogoEmExecucao = 0;
                         
				var btReiniciar = document.getElementById('reiniciar');
				var btEsquerdo = document.getElementById('esquerdo');
				var btDireito = document.getElementById('direito');
				var btRanking = document.getElementById('ranking');
				
				btReiniciar.style.display = 'block';
				btReiniciar.style.width = '100%';
				btRanking.style.display = 'none';
				btEsquerdo.style.display = 'none';
				btDireito.style.display = 'none';
				
				
				if ( user == "" ) {
					do {
						user = prompt('Qual o seu Nome:','');
	 
					} while (user == "" || user == "null") 
	 
					//alert('Dados gravados ' + user + " Tempo : " + tempoFinalPartida);
				 locGPS();
 				 inserirDadosDB(user, tempoFinalPartida); 
 				 //alert("lat " + latitude + "long " + longitude);
				 controleBtReiniciar = 1;			
				 user = "";
				}				
               
            },  
                "public function reiniciarJogo", function () {  
                 Main.m_currTest = null;
                 NUMBER_TELA = 1;
				 Main.m_currTest = new Main.tests[NUMBER_TELA]();
            },
        ];
    }, [], ["TestBed.Test", "Main", "Box2D.Common.Math.b2Vec2", "Box2D.Collision.Shapes.b2PolygonShape", "Box2D.Dynamics.b2FixtureDef", "Box2D.Dynamics.b2BodyDef", "Box2D.Dynamics.b2Body", "Box2D.Dynamics.Joints.b2RevoluteJointDef", "Math", "Box2D.Collision.Shapes.b2CircleShape", "Array"], "0.8.0", "0.8.1"
);

function inserirDadosDB(user, time) { 
	setupDB(); 
    if (db) {
		//alert("aqui quase inserindo");
		//alert("lat " + latitude + "long " + longitude);
         db.transaction(function (tx) {   
          
          sql2 = "insert into ranking (user, time, latitude, longitude) values (?, ?, ?, ?)";    
            
          tx.executeSql(sql2, [user, time, latitude, longitude]);
     
         } , err, finalli);
     
     }
 }
 
function limpaDadosDB() { 
	setupDB(); 
    if (db) {
		//alert("aqui quase inserindo");
         db.transaction(function (tx) {   
          
          sql2 = "delete from ranking";    
            
          tx.executeSql(sql2);
     
         } , err, finalli);
     
     }
    }

// class TestBed.TestPageStart
joo.classLoader.prepare(
    "package TestBed",
    "public class TestPageStart extends TestBed.Test", 2, function ($$private) {
        ;
        return[function () {
            joo.classLoader.init(Box2D.Dynamics.b2Body, Main, Math);
        },
            "public function TestPageStart", function () {
                this.super$2();
                Main.novoteste.text = "";
                jogoEmExecucao = 0;
                
                var m_aboutTextFormat = new flash.text.TextFormat("Arial", 30, 0x00CCFF, true, false, false);
                m_aboutTextFormat.align = flash.text.TextFormatAlign.RIGHT;
                Main.m_aboutText.defaultTextFormat = m_aboutTextFormat;
                Main.m_aboutText.x = 1;
                Main.m_aboutText.y = 200;
                Main.m_aboutText.width = 300;
                Main.m_aboutText.height = 100;
                Main.m_aboutText.text = "AquaPlay Mobile";
         
				var btReiniciar = document.getElementById('reiniciar');
				var btEsquerdo = document.getElementById('esquerdo');
				var btDireito = document.getElementById('direito');
				var btRanking = document.getElementById('ranking');
				
				btReiniciar.style.display = 'block';
				btReiniciar.style.width = '50%';
				btRanking.style.display = 'block';
				btEsquerdo.style.display = 'none';
				btDireito.style.display = 'none';               
                
                
                
            },
            
            "public function reiniciarJogo", function () {  
                 Main.m_currTest = null;
                 NUMBER_TELA = 1;
                 Main.m_currTest = new Main.tests[NUMBER_TELA]();
            },
            "public function verRanking", function () {
            	Main.m_currTest = null;
               	NUMBER_TELA = 3;
                Main.m_currTest = new Main.tests[NUMBER_TELA]();
               
            },
            
        ];
    }, [], ["TestBed.Test", "Main", "Box2D.Common.Math.b2Vec2", "Box2D.Collision.Shapes.b2PolygonShape", "Box2D.Dynamics.b2FixtureDef", "Box2D.Dynamics.b2BodyDef", "Box2D.Dynamics.b2Body", "Box2D.Dynamics.Joints.b2RevoluteJointDef", "Math", "Box2D.Collision.Shapes.b2CircleShape", "Array"], "0.8.0", "0.8.1"
);

// class TestBed.TestBuoyancy
joo.classLoader.prepare(
    "package TestBed",
    "public class TestBuoyancy extends TestBed.Test", 2, function ($$private) {
        ;
        return[function () {
            joo.classLoader.init(Main, Box2D.Dynamics.b2Body, Math);
        },
            "private var", {m_bodies:function () {
                return(new Array());
            }},
            "private var", {m_controller:null},
            "public function TestBuoyancy", function () {
                this.super$2();
                this.m_bodies$2 = this.m_bodies$2();
                Main.novoteste.text = "";
                jogoEmExecucao = 1;
                tempoJogo = Math.round((new Date()).getTime() / 1000);
                
                refBolhas =new Array();
                var bc = new Box2D.Dynamics.Controllers.b2BuoyancyController();
                this.m_controller$2 = bc;
				
				my_m_physScale = this.m_physScale;
				
                bc.normal.Set(0, -1);
                bc.offset = -100/this.m_physScale;
                bc.density = 2.0;
                bc.linearDrag = 8;
                bc.angularDrag = 2;
                var ground = this.m_world.GetGroundBody();
                var i;
                var anchor = new Box2D.Common.Math.b2Vec2();
                var body;
                var fd;

				
                //criando quadrados
                for (i = 0; i < QUANT_CAIXAS; i++) {
                    var bodyDef = new Box2D.Dynamics.b2BodyDef();
                    bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
                    var boxDef = new Box2D.Collision.Shapes.b2PolygonShape();
                    fd = new Box2D.Dynamics.b2FixtureDef();
                    fd.shape = boxDef;
                    fd.density = 2.1;
                    fd.friction = 0.3;
                    fd.restitution = 0.1;
					
					//define o tamanho das caixinhas
                    boxDef.SetAsBox(0.3, 0.3);
					
					//boxDef.SetAsBox((Math.random() * 2 + 10) / this.m_physScale, (Math.random() * 1 + 10) / this.m_physScale);
                    //bodyDef.position.Set((Math.random() * 200 + 0) / this.m_physScale, (Math.random() * 280 + 10) / this.m_physScale);
					
					/*
					* faz os blocos nascerem em baixo
					*/
					
					bodyDef.position.Set(Math.random() * 2+3, Math.random() * 6+5);
					//bodyDef.position.Set(2, 3);
                    bodyDef.angle = Math.random() * Math.PI;
                    body = this.m_world.CreateBody(bodyDef);
                    body.CreateFixture(fd);
                    this.m_bodies$2.push(body);
					
					/*
					* array com as referências para as caixinhas
					*/
					arrayCaixinhas[i] = body;
                }

                /* Criando Cesta */

                bd = new Box2D.Dynamics.b2BodyDef();
                bd.position.Set(2.5, 6.0); //posição em relação ao body
                body = this.m_world.CreateBody(bd);
                var polygon = Box2D.Collision.Shapes.b2PolygonShape.AsBox(1.5, 0.25);
				
								//espessura //tamanho	//desloc_lateral //desloc_vertical //angulo
                polygon.SetAsOrientedBox(0.07, 1, new Box2D.Common.Math.b2Vec2(0.5, -1.3), 1.58);
				//polygon.SetAsOrientedBox(3.0 / this.m_physScale, 30.0 / this.m_physScale, new Box2D.Common.Math.b2Vec2(2.9 / this.m_physScale, -35.0 / this.m_physScale), 1.58);
                this.m_platform = body.CreateFixture2(polygon, 0.0);

                var sd_left = new Box2D.Collision.Shapes.b2PolygonShape();
				
										//espessura //tamanho	//desloc_lateral //desloc_vertical //angulo
				sd_left.SetAsOrientedBox(0.07, 1, new Box2D.Common.Math.b2Vec2(-0.5, -2.3), -0.2);
				//sd_left.SetAsOrientedBox(2.0 / this.m_physScale, 30.0 / this.m_physScale, new Box2D.Common.Math.b2Vec2(-33.5 / this.m_physScale, -70.5 / this.m_physScale), -0.2);

                var sd_right = new Box2D.Collision.Shapes.b2PolygonShape();
                //sd_right.SetAsOrientedBox(2.0 / this.m_physScale, 30.0 / this.m_physScale, new Box2D.Common.Math.b2Vec2(33.5 / this.m_physScale, -70.5 / this.m_physScale), 0.2);
				
								//espessura //tamanho	//desloc_lateral //desloc_vertical //angulo
				sd_right.SetAsOrientedBox(0.07, 1, new Box2D.Common.Math.b2Vec2(1.5, -2.3), 0.2);

                body.CreateFixture2(sd_left, 1.0);
                body.CreateFixture2(sd_right, 1.0);
				
                this.m_bodies$2.push(body);

                for (var $1 in this.m_bodies$2) {
                    body = this.m_bodies$2[$1];
                    this.m_controller$2.AddBody(body);
                }
                this.m_world.AddController(this.m_controller$2);

                Main.m_aboutText.text = "";
                
                
                var btReiniciar = document.getElementById('reiniciar');
				var btEsquerdo = document.getElementById('esquerdo');
				var btDireito = document.getElementById('direito');
				var btRanking = document.getElementById('ranking');
				
				btReiniciar.style.display = 'none';
				btRanking.style.display = 'none';
				btEsquerdo.style.display = 'block';
				btDireito.style.display = 'block';  

            },
            //Criar H20
            "public override function Update", function () {
                this.Update$2();

                //Demarca a area referente a agua
                this.m_sprite.graphics.lineStyle(1, 0x0000ff, 1);
                this.m_sprite.graphics.moveTo(5, 30);
                this.m_sprite.graphics.lineTo(350, 30);

                //Apenas para preencher a area referente a agua
                this.m_sprite.graphics.lineStyle();
                this.m_sprite.graphics.beginFill(0x0000ff, 0.1);
                this.m_sprite.graphics.moveTo(5, 30);
                this.m_sprite.graphics.lineTo(350, 30);
                this.m_sprite.graphics.lineTo(350, 500);
                this.m_sprite.graphics.lineTo(5, 500);
                this.m_sprite.graphics.endFill();
            },

            // alert("criando ar");
            "public function createArLeft", function () {
            	tempo = Math.round((new Date()).getTime() / 1000);
                for (var i = 0; i < 20; i++) {

                    var bodyDef = new Box2D.Dynamics.b2BodyDef();
                    bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
                    var cd = new Box2D.Collision.Shapes.b2CircleShape((Math.random() * 15 + 5) / this.m_physScale);

                    var fixtureDef = new Box2D.Dynamics.b2FixtureDef();
                    fixtureDef.shape = cd;
                    fixtureDef.friction = 0.3;
                    fixtureDef.density = 0.5;
                    fixtureDef.restitution = 0.1;

                    bodyDef.position.Set((Math.random() * 40 + 20) / this.m_physScale, 280 / this.m_physScale);
                    bodyDef.angle = Math.random() * Math.PI;
                    var body = this.m_world.CreateBody(bodyDef);
                    body.CreateFixture(fixtureDef);
                    this.m_controller$2.AddBody(body);

                    refBolhas[j] = body;
                    refBolhas[j][j] = tempo;                    
                    j++;
               }
            },

            // alert("criando ar");
            "public function createArRight", function () {
            	tempo = Math.round((new Date()).getTime() / 1000);
                for (var i = 0; i < 20; i++) {

                    var bodyDef = new Box2D.Dynamics.b2BodyDef();
                    bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
                    var cd = new Box2D.Collision.Shapes.b2CircleShape((Math.random() * 15 + 5) / this.m_physScale);

                    var fixtureDef = new Box2D.Dynamics.b2FixtureDef();
                    fixtureDef.shape = cd;
                    fixtureDef.friction = 0.3;
                    fixtureDef.density = 0.5;
                    fixtureDef.restitution = 0.1;
                    
                    bodyDef.position.Set((Math.random() * 100 + 140) / this.m_physScale, 280 / this.m_physScale);
                    bodyDef.angle = Math.random() * Math.PI;
                    var body = this.m_world.CreateBody(bodyDef);
                    body.CreateFixture(fixtureDef);
                    this.m_controller$2.AddBody(body);
                    
                    refBolhas[j] = body;
                    refBolhas[j][j] = tempo;
                    
                    j++;
               }
            },

            //Destroy Ar
            "public function destroyAr", function (now) {             	
                if(refBolhas.length > 0){                	
                    for (var i = 0; i < refBolhas.length; i++) {
                     var item = refBolhas[i];               
                        if(item != null && refBolhas[i][i] != null && (refBolhas[i][i] <= (now - TEMPO_ESTOURA_BOLHA))){
                            this.m_world.DestroyBody(item);
                            refBolhas[i] = null;
                            //refBolhas[i][i] = null;
                        }
                    }
                }
            },
        ];
    }, [], ["TestBed.Test", "Array", "Box2D.Dynamics.Controllers.b2BuoyancyController", "Box2D.Common.Math.b2Vec2", "Box2D.Dynamics.b2BodyDef", "Box2D.Dynamics.b2Body", "Box2D.Collision.Shapes.b2PolygonShape", "Box2D.Dynamics.b2FixtureDef", "Math", "Box2D.Collision.Shapes.b2CircleShape", "Main"], "0.8.0", "0.8.1"
);

function verificaVitoria() {
	var quantCaixa = 0;
	var x1 = 1.6;
	var y1 = 2.6;
	
	var x2 = 3.4;
	var y2 = 4.5;
	
	var x3 = 3.6;
	var y3 = 2.6;
	
	for (h = 0; h < arrayCaixinhas.length; h++) {
	
		var element = arrayCaixinhas[h];
		
		var y = element.GetPosition().y;
		var x = element.GetPosition().x;
		//if(x > 3 && x < 3.6)	
		//	alert(x);
		
		/*
		* verifica se a caixa pequena entrou na grande
		*/
		if ((y > y1 && y < y2) && (x > x1 && x < x3)) {
			quantCaixa = 0;
			for( i = 0; i < DentrCaixa.length; i++) {
				if(DentrCaixa[i] == element) {
					quantCaixa++;
				}
			}
			
			//alert("entrou na caixa");
			/*
			* se não estiver no array coloca para saber quando ganhou
			*/
			if (quantCaixa == 0) {
				DentrCaixa[posArray] = element;
				posArray++;
			}
		}
		
		/*
		* Verifica se todas as caixas estão dentro, da caixa maior
		*/
		if(DentrCaixa.length == QUANT_CAIXAS) {
			return true;
		}
	}
}

function aceleracao(){
	    if(id == 0){
	        id = navigator.accelerometer.watchAcceleration(onSuccess, onError);
	    } else {
	    	navigator.accelerometer.cleanWatch(id);
	    	id = 0;
	    }
}

function onSuccess(acceleration) {
	var x = acceleration.x;
	var y = acceleration.y;
	
	if((x > -0,5 && x < 9,2 ) &&  (y > 0,3 && y < 9,8)){
	alert(x + '\n\n ' + y);
	}
   
};

function onError() {
    alert('onError!');
};


function locGPS() {
	//document.addEventListener("deviceready", function() {
		navigator.geolocation.getCurrentPosition(function(position){
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;
			//alert("lat " + latitude + "long " + longitude);
		}, logErro);
	//});
}

function setupDB() {
	db = window.openDatabase("bd1", "1.0", "myBank", (1024 * 1024) * 5);
	
	if (db) {
		console.log("passei");
		db.transaction(exec, err, finalli);
	}
}

function exec(tx) {

	console.log("transacao rolando");

	sql = "create table if not exists ranking (id integer Primary Key autoincrement, user varchar(100), time varchar(100), latitude varchar(100), longitude varchar(100))";
	tx.executeSql(sql);
}

function limparTable(tx) {
	
	console.log("limpa table");

	sql = "drop table ranking";
	
	tx.executeSql(sql);
}
function limparDB(tx) {

	console.log("limpar bd");

	sql = "delete * from ranking";
	
	tx.executeSql(sql);
}

function err(e) {

	console.log("transação erro");
	//alert(e);
}

function selectDB(tx) {

	console.log("tudo bd");

	sql = "select * from ranking";
	
	tx.executeSql(sql);
}

function logErro(err) {
	log("Erro: [ " + err.code + " ] " + err.message);
}

function finalli() {
	console.log("transação final");
}