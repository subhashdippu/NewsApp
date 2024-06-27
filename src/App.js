import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/entertainment' exect element={

                <News key="entertainment" pageSize={5} country="in" category="entertainment" />

              }
            />
            <Route
              path='/business' exect element={
                <>
                  <News key="business" pageSize={5} country="in" category="business" />
                </>
              }
            />
            <Route
              path='/' exect element={
                <>
                  <News key="/" pageSize={5} country="in" category="general" />
                </>
              }
            />
            <Route
              path='/health' exect element={
                <>
                  <News key="health" pageSize={5} country="in" category="health" />
                </>
              }
            />
            <Route
              path='/science' exect element={
                <>
                  <News key="science" pageSize={5} country="in" category="science" />
                </>
              }
            />
            <Route
              path='/sports' exect element={
                <>
                  <News key="sports" pageSize={5} country="in" category="sports" />
                </>
              }
            />
            <Route
              path='/technology' exect element={
                <>
                  <News key="technology" pageSize={5} country="in" category="technology" />
                </>
              }
            />
          </Routes>
        </BrowserRouter>


      </div>
    )
  }
}
