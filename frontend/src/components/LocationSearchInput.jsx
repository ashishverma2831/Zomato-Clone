import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';


const LocationSearchInput = () => {

    const [address, setAddress] = React.useState("")
    const [coordinates, setCoordinates] = React.useState({lat: null, lng: null})

    const handleSelect = async value => {
        const results = await geocodeByAddress(value)
        const latLng = await getLatLng(results[0])
        setAddress(value)
        setCoordinates(latLng)
    }
    
  return (
    <>
        <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className='relative w-full min-w-0'>
                <input
                {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input w-full min-w-0 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400',
                })}
                />
                <div className="autocomplete-dropdown-container absolute left-0 right-0 z-10 max-h-60 overflow-y-auto rounded-b-lg bg-white shadow-lg">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                    const className = suggestion.active
                    ? 'suggestion-item--active block px-4 py-3'
                    : 'suggestion-item block px-4 py-3';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                    <div
                        {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                        })}
                    >
                        <span>{suggestion.description}</span>
                    </div>
                    );
                })}
                </div>
            </div>
            )}
        </PlacesAutocomplete>
    </>
  )
}

export default LocationSearchInput