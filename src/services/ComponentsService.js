class ComponentsService {
  constructor() {
    this.components = [];
  }

  push = (component) => {
    this.components.push(component);
  }

  destroy = () => {
    this.components.forEach(c => {
      c.destroy();
    });
  }
}

export default new ComponentsService();
