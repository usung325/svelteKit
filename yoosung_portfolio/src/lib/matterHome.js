// lib/physicsUtils.js
import Matter from 'matter-js';

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;


export function createPhysicsEngine(element, command) {
    if (command == 'init'){
        console.log('its working');

        // Initialize Matter.js engine
        const engine = Engine.create();
        // Enable sleeping
        engine.enableSleeping = true
    
        // Add a renderer
        const render = Render.create({
            element: element,
            engine: engine,
            options: {
                width: 1920, //1920
                height: 1080, //1080
                background: '#ffffff',
                wireframeBackground: '#ffffff',
                wireframes: false
            }
        });

        let width = window.innerWidth;
        let height = window.innerHeight;
        
        ///////////////////////////////////////////////////////////////////////////////////////////////
        // create two boxes and a ground
        // var defaultFillStyle2 = (body.isStatic ? '#14151f' : Common.choose(['#08278c', '#65bbf7', '#ffd45e', '#ff7b24', '#fae950']));
        // body.render.fillStyle = body.render.fillStyle || defaultFillStyle2;
    
        let boxA = Bodies.rectangle(200, 200, 80, 80);
        let boxB = Bodies.rectangle(250, 50, 80, 80);
        let ground = Bodies.rectangle(900, height + 30, 2000, 60, { //980
            isStatic: true,
            render: {
                fillStyle: '#ffffff'
            } 
        });

        let wallL = Bodies.rectangle(-25, 500, 50, 2000, { 
            isStatic: true,
            render: {
                fillStyle: '#ffffff'
            } 
        });
        let wallR = Bodies.rectangle(width + 25, 500, 50, 2000, { //1550 x
            isStatic: true,
            render: {
                fillStyle: '#ffffff'
            } 
        });
    
        // Add bodies, constraints, etc.
        let rectangle2 = Bodies.rectangle(150, 250, 100, 50);
    
    
        let arrColor = ['#fff152', '#4ec8fc', '#ffa538', '#06285e'];
        let randIndex = (Math.floor((Math.random() * 3)));
    
    
    
    
        let stack = Matter.Composites.stack(-25, -920, 4, 4, 5, 100, function(x,y){
            // let sides = Math.floor((Math.random() * 5) + 3);
            // return Matter.Bodies.polygon(x, y, sides, 50, {
            //     render: {
            //         // fillStyle: arrColor[randIndex]
            //     }
            // });
            let listVerts = [[
                {x : 18 , y : 195},
                {x : 18 , y : 16},
                {x : 107 , y : 195}
            ],[
                {x : 261 , y : 154},
                {x : 292 , y : 186},
                {x : 229 , y : 249},
                {x : 198 , y : 218},
                {x : 198 , y : 154}
            ],[
                {x : 198 , y : 195},
                {x : 153 , y : 151},
                {x : 197 , y : 105}
            ]]
            return Matter.Bodies.fromVertices(x, y, listVerts[Math.floor((Math.random() * 3))]);
        });
    
        let stack2 = Matter.Composites.stack(width - 330, -920, 4, 4, 5, 100, function(x,y){ //1190 for x
            // let sides = Math.floor((Math.random() * 5) + 3);
            // return Matter.Bodies.polygon(x, y, sides, 50, {
            //     render: {
            //         // fillStyle: '#fff152'
            //     }
            // });
    
            let listVerts = [[
                {x : 18 , y : 195},
                {x : 18 , y : 16},
                {x : 107 , y : 195}
            ],[
                {x : 198 , y : 195},
                {x : 153 , y : 151},
                {x : 197 , y : 105}
            ],[
                {x : 261 , y : 154},
                {x : 292 , y : 186},
                {x : 229 , y : 249},
                {x : 198 , y : 218},
                {x : 198 , y : 154}
            ]]
            return Matter.Bodies.fromVertices(x, y, listVerts[Math.floor((Math.random() * 3))]);
        });
    
    
        //////////////////////////////////////////////////////////////////////////////////////////
    
        let mouse = Matter.Mouse.create(render.canvas);
        let mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                render: { visible: false }
            }
        });
        render.mouse = mouse;
    
        Matter.World.add(engine.world, [stack, stack2, ground,wallL, wallR, mouseConstraint]);
        // ...
    
        // Run the engine
        Runner.run(engine);
        // Render the scene
        Render.run(render);
    
        
    
        
    
        // Return the engine or any other necessary objects
        return engine;
    };
};
