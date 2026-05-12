/**
 * SCORM API Wrapper
 * Handles communication with Learning Management System (LMS)
 */

(function(window) {
  'use strict';

  const ScormAPI = {
    // SCORM API object from LMS
    api: null,
    
    /**
     * Initialize SCORM connection
     */
    init: function() {
      this.api = this.findAPI(window);
      if (this.api) {
        return this.setInitialize();
      }
      console.warn('SCORM API not found');
      return false;
    },
    
    /**
     * Search for SCORM API in LMS
     */
    findAPI: function(win) {
      let api = null;
      
      if (win.API) {
        return win.API;
      }
      if (win.parent && win.parent !== win) {
        api = this.findAPI(win.parent);
        if (api) return api;
      }
      if (win.opener) {
        api = this.findAPI(win.opener);
        if (api) return api;
      }
      
      return null;
    },
    
    /**
     * Initialize SCORM session
     */
    setInitialize: function() {
      if (!this.api) return false;
      
      const result = this.api.LMSInitialize('');
      
      if (result) {
        this.setData('cmi.core.lesson_status', 'started');
        this.setData('cmi.core.session_time', 'PT0H0M0S');
        return true;
      }
      
      return false;
    },
    
    /**
     * Set SCORM data value
     */
    setData: function(key, value) {
      if (!this.api) return false;
      return this.api.LMSSetValue(key, value) === 'true';
    },
    
    /**
     * Get SCORM data value
     */
    getData: function(key) {
      if (!this.api) return null;
      return this.api.LMSGetValue(key);
    },
    
    /**
     * Mark course as completed
     */
    setComplete: function() {
      return this.setData('cmi.core.lesson_status', 'completed');
    },
    
    /**
     * Set score
     */
    setScore: function(score) {
      if (score < 0 || score > 100) return false;
      return this.setData('cmi.core.score.raw', score);
    },
    
    /**
     * Finalize SCORM session
     */
    finish: function() {
      if (!this.api) return false;
      return this.api.LMSFinish('') === 'true';
    },
    
    /**
     * Get last SCORM error
     */
    getLastError: function() {
      if (!this.api) return null;
      return this.api.LMSGetLastError();
    }
  };
  
  // Export to global scope
  window.ScormAPI = ScormAPI;
  
})(window);
