// lib/physicsUtils.js
import Matter from 'matter-js';

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;



export function createPhysicsEngine(element) {
    let randColorArr = ['#fae150', '#ee7d30', '#4899d3', '#273981'];

    // Initialize Matter.js engine
    const engine = Engine.create();

    // Add a renderer
    const render = Render.create({
        element: element,
        engine: engine,
        options: {
            width: 400,
            height: 300,
            background: '#040B27',
            wireframeBackground: '#ffffff',
            wireframes: false
        }
    });

    console.log(render.options);
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // create two boxes and a ground
    let boxA = Bodies.rectangle(200, 200, 80, 80);
    let boxB = Bodies.rectangle(250, 50, 80, 80);
    let ground = Bodies.rectangle(300, 350, 810, 100, { 
        isStatic: true,
        render: {
            fillStyle: '#1462f5'
        } 
    });

    // Add bodies, constraints, etc.
    let rectangle2 = Bodies.rectangle(150, 250, 100, 50);


    let stack = Matter.Composites.stack(50,100, 4, 2, 0, 0, function(x,y){
        let sides = Math.round(Matter.Common.random(3,5));
        return Matter.Bodies.polygon(x, y, sides, 50, {
            render: {
                fillStyle: '#fff152'
            }
        });
    });

    let stack2 = Matter.Composites.stack(0, 20, 5, 2, 5, 5, function(x,y){
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
        return Matter.Bodies.fromVertices(x, y, listVerts[Math.floor((Math.random() * 3))], {
            render: {
                fillStyle: randColorArr[Math.floor((Math.random()*4))]
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

    Matter.World.add(engine.world, [stack2, ground, mouseConstraint]);
    // ...

    // Run the engine
    Runner.run(engine);
    // Render the scene
    Render.run(render);

    

    // Return the engine or any other necessary objects
    return engine;
};
