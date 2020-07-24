import React, { Component, Fragment } from 'react';

export default class DogsApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dog: {
        message: '',
        status: '',
      },
      salvedDogName: '',
      isLoading: false,
    };
  }

  getDogsApi = async () => {
    this.setState({ isLoading: true });
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const dog = await response.json();
    const isLoading = false;
    this.setState({ dog, isLoading });
    alert(dog.message.split('/')[4]);
    console.log(dog);
    return dog;
  };

  componentDidMount() {
    console.log('didMount');
    if (localStorage.dogArray) {
      const arr = JSON.parse(localStorage.dogArray);
      const dog = arr[0];
      const salvedDogName = arr[1];
      this.setState({ dog, salvedDogName, isLoading: false });
    } else {
      this.getDogsApi();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dog.message.includes('terrier')) return false;
    return true;
  }

  render() {
    const { dog, isLoading } = this.state;
    return (
      <Fragment>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Fragment>
            <img src={dog.message} alt="a dog" height={500} />
            <label htmlFor="dog-name">
              Digite um nome para o dog:
              <input
                name="dog-name"
                type="text"
                onChange={(event) => {
                  const salvedDogName = event.target.value;
                  this.setState({ salvedDogName });
                }}
              />
            </label>
            <button
              onClick={() => {
                const { dog, salvedDogName } = this.state;
                localStorage.dogArray = JSON.stringify([dog, salvedDogName]);
              }}
            >
              Guardar dog
            </button>
          </Fragment>
        )}
        <button
          onClick={async () => {
            const dog = await this.getDogsApi();
            this.setState({ dog });
          }}
        >
          Next Dog
        </button>
      </Fragment>
    );
  }
}
