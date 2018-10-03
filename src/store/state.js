let localCity = '北京'
try {
  localCity = localStorage.city || localCity
} catch (e) {}

export default {
  city: localCity
}
