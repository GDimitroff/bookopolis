export const formatError = (errorCode) => {
  switch (errorCode) {
    case 'auth/invalid-email':
    case 'invalid email': {
      return 'Невалиден имейл адрес.';
    }
    case 'invalid password': {
      return 'Невалидна парола.';
    }
    case 'auth/wrong-password': {
      return 'Сгрешен имейл или парола.';
    }
    case 'auth/too-many-requests': {
      return 'Опитайте отново по-късно!';
    }
    case 'auth/user-not-found': {
      return 'Няма намерен потребител с този имейл адрес.';
    }
    default: {
      return 'Грешка!';
    }
  }
};
