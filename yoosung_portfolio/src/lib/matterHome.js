// lib/physicsUtils.js
import Matter from 'matter-js';

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

export function createPhysicsEngine(element) {
    // Initialize Matter.js engine
    const engine = Engine.create();

    // Add a renderer
    const render = Render.create({
        element: element,
        engine: engine,
        options: {
            width: 1920,
            height: 1080,
            background: '#ffffff',
            wireframeBackground: '#ffffff',
            wireframes: false
        }
    });

    console.log(render.options);
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // create two boxes and a ground
    let boxA = Bodies.rectangle(200, 200, 80, 80);
    let boxB = Bodies.rectangle(250, 50, 80, 80);
    let ground = Bodies.rectangle(900, 960, 2000, 100, { 
        isStatic: true,
        render: {
            fillStyle: '#1462f5'
        } 
    });

    // Add bodies, constraints, etc.
    let rectangle2 = Bodies.rectangle(150, 250, 100, 50);


    let stack = Matter.Composites.stack(50,0, 4, 4, 5, 50, function(x,y){
        let sides = Math.round(Matter.Common.random(3,5));
        return Matter.Bodies.polygon(x, y, sides, 50, {
            render: {
                fillStyle: '#fff152'
            }
        });
    });

    let stack2 = Matter.Composites.stack(1150,0, 4, 4, 5, 50, function(x,y){
        let sides = Math.round(Matter.Common.random(3,5));
        return Matter.Bodies.polygon(x, y, sides, 50, {
            render: {
                fillStyle: '#fff152'
            }
        });
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

    Matter.World.add(engine.world, [stack, stack2, ground, mouseConstraint]);
    // ...

    // Run the engine
    Runner.run(engine);
    // Render the scene
    Render.run(render);

    

    // Return the engine or any other necessary objects
    return engine;
};
