class Scene3 extends Phaser.Scene
{
  constructor()
  {
    super("Scene3Games");
  }

  create()
  {
    this.scene.start("Scene2Games");
  }
}