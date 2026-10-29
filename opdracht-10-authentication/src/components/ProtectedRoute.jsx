// ProtectedRoute - voorbeeld van de kernlogica
// de rest van het component maak je zelf
// (Navigate importeer je vanuit 'react-router')
if (!user) {
  return <Navigate to="/login" />;
}
return children;
