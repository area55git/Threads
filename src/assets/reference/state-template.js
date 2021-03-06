export default {
  userID: '000000',
  userName: 'user name',
  scenes: [
    {
      'name': 'Empty Scene',
      'id': '000001',
      'author': 'Eric Schirtzinger',
      'width': 0,
      'height': 0,
      'settings': {
        'stepSize': 0.1
      },
      'activeThread': 0,
      'paused': false,
      'camera': {
        'position': [0, 25, 100],
        'radius': 250,
        'theta': 1.57079,
        'phi': 1.2,
        'target': [0, 0, 0],
        'up': [0, 1, 0],
        'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        'fieldOfView': 0.57079,
        'zNear': 50,
        'zFar': 150
      },
      'spindle': {
        'isVisible': true,
        'position': [0, 0, 0],
        'color': 'white',
        'size': 10,
        'roationSpeed': {'x': 0, 'y': 0, 'z': 0},
        'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      },
      'grid': {
        'isVisible': true,
        'position': [0, 0, 0],
        'divisions': 10,
        'spacing': 10,
        'color': 'rgba(224, 105, 78, 0.25)',
        'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      },
      'threads': [
        {
          'position': [0, 0, 0],
          'rotation': [0, 0, 0],
          'rotationSpeed': [0, 0, 0],
          'color': '#deb853',
          'points': [],
          'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }
      ]
    },
    {
      'name': 'My Second Scene',
      'id': '000002',
      'author': 'Eric Schirtzinger',
      'width': 0,
      'height': 0,
      'settings': {
        'stepSize': 0.1
      },
      'activeThread': 0,
      'camera': {
        'position': [0, 25, 100],
        'radius': 250,
        'theta': 0,
        'phi': 0.3,
        'target': [0, 0, 0],
        'up': [0, 1, 0],
        'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        'fieldOfView': 1.57079,
        'zNear': 50,
        'zFar': 150
      },
      'spindle': {
        'isVisible': true,
        'position': [0, 0, 0],
        'color': 'white',
        'size': 10,
        'roationSpeed': {'x': 0, 'y': 0, 'z': 0},
        'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      },
      'grid': {
        'isVisible': true,
        'position': [0, 0, 0],
        'divisions': 10,
        'spacing': 10,
        'color': 'rgba(200, 150, 60, .25)',
        'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      },
      'threads': [
        {
          'position': [50, 10, 0],
          'rotation': [0, 0, 0],
          'rotationSpeed': [0, 0, 0],
          'color': 'green',
          'points': [],
          'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        },
        {
          'position': [0, 0, 0],
          'rotation': [0, 0, 0],
          'rotationSpeed': [0, 0, 0],
          'color': 'yellow',
          'points': [],
          'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }
      ]
    },
    {
      'name': 'My Third Scene',
      'id': '000003',
      'author': 'Ian Schirtzinger',
      'width': 0,
      'height': 0,
      'settings': {
        'stepSize': 0.1
      },
      'activeThread': 0,
      'camera': {
        'position': [0, 25, 100],
        'radius': 250,
        'theta': 0,
        'phi': 0.3,
        'target': [0, 0, 0],
        'up': [0, 1, 0],
        'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        'fieldOfView': 1.57079,
        'zNear': 50,
        'zFar': 150
      },
      'spindle': {
        'isVisible': true,
        'position': [0, 0, 0],
        'color': 'white',
        'size': 10,
        'roationSpeed': {'x': 0, 'y': 0, 'z': 0},
        'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      },
      'grid': {
        'isVisible': true,
        'position': [0, 0, 0],
        'divisions': 10,
        'spacing': 10,
        'color': 'rgba(200, 150, 60, .25)',
        'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      },
      'threads': [
        {
          'position': [50, 10, 0],
          'rotation': [0, 0, 0],
          'rotationSpeed': [1, 1, 1],
          'color': 'green',
          'points': [
            [-5, -5, 0],
            [-5, 5, 0],
            [5, 5, 0],
            [5, -5, 0],
            [-5, -5, 0]
          ],
          'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        },
        {
          'position': [0, 0, 0],
          'rotation': [0, 0, 0],
          'rotationSpeed': [-2.25, -2, -2.5],
          'color': 'yellow',
          'points': [],
          'tx': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }
      ]
    }
  ]
}
