import Image from '../assets/particles/flares.png';
import Json from '../assets/particles/flares.json';
import { Vector } from 'matter';

export const preload = (scene: Phaser.Scene) => {
    scene.load.atlas('flares', Image, Json);
}

// TO DO: GARBAGE COLLECT EMITTER WHEN IT LEAVES THE SCREEN.
export class Emitter {

    public emitter!: Phaser.GameObjects.Particles.ParticleEmitter;

    private static emitZone = new Phaser.Geom.Circle(0, 0, 5);

    public declare velocity: Phaser.Types.Math.Vector2Like;

    constructor(scene: Phaser.Scene, position: Phaser.GameObjects.Image, direction: Vector) {

        // Marks the direction of the projectile
        const radToDeg = (rad: number) => rad * (180 / Math.PI);

        const px = position.x;
        const py = position.y;

        const atan = Math.atan2(py - direction.y, px - direction.x);

        // Sends the projectile in the correct direction given the right speed
        const d = {
            x: -radToDeg(Math.cos(atan)),
            y: -radToDeg(Math.sin(atan))
        };

        const speed = 0.07;

        this.velocity = {
            x: d.x * speed,
            y: d.y * speed
        }

        this.create(scene, position);
    }

    public create = (scene: Phaser.Scene, { x, y }: Phaser.GameObjects.Image) => {

        const particles = scene.add.particles('flares');
        const config: Phaser.Types.GameObjects.Particles.ParticleEmitterConfig = {
            frame: 'red',
            radial: false,
            lifespan: 300,
            quantity: 1,
            frequency: 0.2,
            x: x,
            y: y,
            scale: { start: 0.3, end: 0, ease: 'Power3' },
            blendMode: 'ADD',
            emitZone: { type: 'random', source: Emitter.emitZone as Phaser.Types.GameObjects.Particles.RandomZoneSource },
        };


        this.emitter = particles.createEmitter(config);
    }

    public update = (t: number, dt: number) => {
        this.emitter.setPosition(
            this.emitter.x.propertyValue + (this.velocity.x ?? 0),
            this.emitter.y.propertyValue + (this.velocity.y ?? 0)
        );
    }

    public onMouseMove = (event: Phaser.Input.Pointer) => {
        // const { x, y } = event.position;
        // this.emitter.setPosition(x, y);
    };
}
