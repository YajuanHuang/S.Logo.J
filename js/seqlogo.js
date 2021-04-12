// read the paste or upload file
function getfile() {
  var seqs = document.getElementById('sequence_text');
  var seq_string = seqs.value.split("\n");
  document.getElementById('text1').innerHTML = seq_string;
  if (seq_string != '') {
    var sequence_data = new Array();
    for (var line = 0; line < seq_string.length; line++) {
      if (seq_string[line].search(">") != -1) {
        sequence_data.push(seq_string[line+1].replace(/\s+/g, ""));//得到纯数列数据
      }
    }
    var seq1 = sequence_data[0].toUpperCase(); //防止输入的序列可能是小写的，将小写的转换为答谢的序列
    if (seq1.search("D")!=-1 || seq1.search("E")!=-1 || seq1.search("F")!=-1 || seq1.search("H")!=-1 ||
    seq1.search("I")!=-1 || seq1.search("K")!=-1 || seq1.search("L")!=-1 || seq1.search("M")!=-1 ||
    seq1.search("N")!=-1 || seq1.search("P")!=-1 || seq1.search("Q")!=-1 || seq1.search("R")!=-1 ||
    seq1.search("S")!=-1 || seq1.search("V")!=-1 || seq1.search("W")!=-1 || seq1.search("Y")!=-1) {
      var sequence_number = sequence_data.length, sequence_length = sequence_data[0].length,
      total_letter_counts = sequence_data.length * (sequence_data[0].length);
      var A_single_counts_array = new Array(), C_single_counts_array = new Array(), G_single_counts_array = new Array(),
      T_single_counts_array = new Array(), U_single_counts_array = new Array(), D_single_counts_array = new Array(),
      E_single_counts_array = new Array(), F_single_counts_array = new Array(), H_single_counts_array = new Array(),
      I_single_counts_array = new Array(), K_single_counts_array = new Array(), L_single_counts_array = new Array(),
      M_single_counts_array = new Array(), N_single_counts_array = new Array(), P_single_counts_array = new Array(),
      Q_single_counts_array = new Array(), R_single_counts_array = new Array(), S_single_counts_array = new Array(),
      V_single_counts_array = new Array(), W_single_counts_array = new Array(), Y_single_counts_array = new Array();
      var A_total_counts = 0, C_total_counts = 0, G_total_counts = 0, T_total_counts = 0, U_total_counts = 0,
      D_total_counts = 0, E_total_counts = 0, F_total_counts = 0, H_total_counts = 0, I_total_counts = 0,
      K_total_counts = 0, L_total_counts = 0, M_total_counts = 0, N_total_counts = 0, P_total_counts = 0,
      Q_total_counts = 0, R_total_counts = 0, S_total_counts = 0, V_total_counts = 0, W_total_counts = 0,
      Y_total_counts = 0;
      for (var j = 0; j < sequence_data[0].length; j++){
        var A_single_counts = 0, C_single_counts = 0, G_single_counts = 0, T_single_counts = 0, U_single_counts = 0,
        D_single_counts = 0, E_single_counts = 0, F_single_counts = 0, H_single_counts = 0, I_single_counts = 0,
        K_single_counts = 0, L_single_counts = 0, M_single_counts = 0, N_single_counts = 0, P_single_counts = 0,
        Q_single_counts = 0, R_single_counts = 0, S_single_counts = 0, V_single_counts = 0, W_single_counts = 0, Y_single_counts = 0;
        for (var i = 0; i < sequence_data.length; i++) {
          if (sequence_data[i][j] == "A"||sequence_data[i][j] == "a") { A_single_counts++; A_total_counts++}
          else if (sequence_data[i][j] == "C"|| sequence_data[i][j] == "c") {C_single_counts++; C_total_counts++}
          else if (sequence_data[i][j] == "G"|| sequence_data[i][j] == "g") {G_single_counts++; G_total_counts++}
          else if (sequence_data[i][j] == "T"|| sequence_data[i][j] == "t") {T_single_counts++; T_total_counts++}
          else if (sequence_data[i][j] == "U"|| sequence_data[i][j] == "u") {U_single_counts++; U_total_counts++}
          else if (sequence_data[i][j] == "D"|| sequence_data[i][j] == "d") {D_single_counts++; D_total_counts++}
          else if (sequence_data[i][j] == "E"|| sequence_data[i][j] == "e") {E_single_counts++; E_total_counts++}
          else if (sequence_data[i][j] == "F"|| sequence_data[i][j] == "f") {F_single_counts++; F_total_counts++}
          else if (sequence_data[i][j] == "H"|| sequence_data[i][j] == "h") {H_single_counts++; H_total_counts++}
          else if (sequence_data[i][j] == "I"|| sequence_data[i][j] == "i") {I_single_counts++; I_total_counts++}
          else if (sequence_data[i][j] == "K"|| sequence_data[i][j] == "k") {K_single_counts++; K_total_counts++}
          else if (sequence_data[i][j] == "L"|| sequence_data[i][j] == "l") {L_single_counts++; L_total_counts++}
          else if (sequence_data[i][j] == "M"|| sequence_data[i][j] == "m") {M_single_counts++; M_total_counts++}
          else if (sequence_data[i][j] == "N"|| sequence_data[i][j] == "n") {N_single_counts++; N_total_counts++}
          else if (sequence_data[i][j] == "P"|| sequence_data[i][j] == "p") {P_single_counts++; P_total_counts++}
          else if (sequence_data[i][j] == "Q"|| sequence_data[i][j] == "q") {Q_single_counts++; Q_total_counts++}
          else if (sequence_data[i][j] == "R"|| sequence_data[i][j] == "r") {R_single_counts++; R_total_counts++}
          else if (sequence_data[i][j] == "S"|| sequence_data[i][j] == "s") {S_single_counts++; S_total_counts++}
          else if (sequence_data[i][j] == "V"|| sequence_data[i][j] == "v") {V_single_counts++; V_total_counts++}
          else if (sequence_data[i][j] == "W"|| sequence_data[i][j] == "w") {W_single_counts++; W_total_counts++}
          else if (sequence_data[i][j] == "Y"|| sequence_data[i][j] == "y") {Y_single_counts++; Y_total_counts++}
        }
        A_single_counts_array.push(A_single_counts);
        C_single_counts_array.push(C_single_counts);
        G_single_counts_array.push(G_single_counts);
        T_single_counts_array.push(T_single_counts);
        U_single_counts_array.push(U_single_counts);
        D_single_counts_array.push(D_single_counts);
        E_single_counts_array.push(E_single_counts);
        F_single_counts_array.push(F_single_counts);
        H_single_counts_array.push(H_single_counts);
        I_single_counts_array.push(I_single_counts);
        K_single_counts_array.push(K_single_counts);
        L_single_counts_array.push(L_single_counts);
        M_single_counts_array.push(M_single_counts);
        N_single_counts_array.push(N_single_counts);
        P_single_counts_array.push(P_single_counts);
        Q_single_counts_array.push(Q_single_counts);
        R_single_counts_array.push(R_single_counts);
        S_single_counts_array.push(S_single_counts);
        V_single_counts_array.push(V_single_counts);
        W_single_counts_array.push(W_single_counts);
        Y_single_counts_array.push(Y_single_counts);
      }
      var A_height = new Array(), C_height = new Array(), G_height = new Array(), T_height = new Array(),
      U_height = new Array(), D_height = new Array(), E_height = new Array(), F_height = new Array(),
      H_height = new Array(), I_height = new Array(), K_height = new Array(), L_height = new Array(),
      M_height = new Array(), N_height = new Array(), P_height = new Array(), Q_height = new Array(),
      R_height = new Array(), S_height = new Array(), V_height = new Array(), W_height = new Array(),
      Y_height = new Array();
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(Math.log2(20) + (A_total_counts/total_letter_counts)*Math.log2(A_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(Math.log2(20) + (C_total_counts/total_letter_counts)*Math.log2(C_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(Math.log2(20) + (G_total_counts/total_letter_counts)*Math.log2(G_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(Math.log2(20) + (T_total_counts/total_letter_counts)*Math.log2(T_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(Math.log2(20) + (U_total_counts/total_letter_counts)*Math.log2(U_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < D_single_counts_array.length; i++) {
        if (D_single_counts_array[i] == 0) {D_height.push(0);}
        else{D_height.push(parseFloat(((D_single_counts_array[i]/sequence_number)*(Math.log2(20) + (D_total_counts/total_letter_counts)*Math.log2(D_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < E_single_counts_array.length; i++) {
        if (E_single_counts_array[i] == 0) {E_height.push(0);}
        else{E_height.push(parseFloat(((E_single_counts_array[i]/sequence_number)*(Math.log2(20) + (E_total_counts/total_letter_counts)*Math.log2(E_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < F_single_counts_array.length; i++) {
        if (F_single_counts_array[i] == 0) {F_height.push(0);}
        else{F_height.push(parseFloat(((F_single_counts_array[i]/sequence_number)*(Math.log2(20) + (F_total_counts/total_letter_counts)*Math.log2(F_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < H_single_counts_array.length; i++) {
        if (H_single_counts_array[i] == 0) {H_height.push(0);}
        else{H_height.push(parseFloat(((H_single_counts_array[i]/sequence_number)*(Math.log2(20) + (H_total_counts/total_letter_counts)*Math.log2(H_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < I_single_counts_array.length; i++) {
        if (I_single_counts_array[i] == 0) {I_height.push(0);}
        else{I_height.push(parseFloat(((I_single_counts_array[i]/sequence_number)*(Math.log2(20) + (I_total_counts/total_letter_counts)*Math.log2(I_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < K_single_counts_array.length; i++) {
        if (K_single_counts_array[i] == 0) {K_height.push(0);}
        else{K_height.push(parseFloat(((K_single_counts_array[i]/sequence_number)*(Math.log2(20) + (K_total_counts/total_letter_counts)*Math.log2(K_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < L_single_counts_array.length; i++) {
        if (L_single_counts_array[i] == 0) {L_height.push(0);}
        else{L_height.push(parseFloat(((L_single_counts_array[i]/sequence_number)*(Math.log2(20) + (L_total_counts/total_letter_counts)*Math.log2(L_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < M_single_counts_array.length; i++) {
        if (M_single_counts_array[i] == 0) {M_height.push(0);}
        else{M_height.push(parseFloat(((M_single_counts_array[i]/sequence_number)*(Math.log2(20) + (M_total_counts/total_letter_counts)*Math.log2(M_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < N_single_counts_array.length; i++) {
        if (N_single_counts_array[i] == 0) {N_height.push(0);}
        else{N_height.push(parseFloat(((N_single_counts_array[i]/sequence_number)*(Math.log2(20) + (N_total_counts/total_letter_counts)*Math.log2(N_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < P_single_counts_array.length; i++) {
        if (P_single_counts_array[i] == 0) {P_height.push(0);}
        else{P_height.push(parseFloat(((P_single_counts_array[i]/sequence_number)*(Math.log2(20) + (P_total_counts/total_letter_counts)*Math.log2(P_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < Q_single_counts_array.length; i++) {
        if (Q_single_counts_array[i] == 0) {Q_height.push(0);}
        else{Q_height.push(parseFloat(((Q_single_counts_array[i]/sequence_number)*(Math.log2(20) + (Q_total_counts/total_letter_counts)*Math.log2(Q_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < R_single_counts_array.length; i++) {
        if (R_single_counts_array[i] == 0) {R_height.push(0);}
        else{R_height.push(parseFloat(((R_single_counts_array[i]/sequence_number)*(Math.log2(20) + (R_total_counts/total_letter_counts)*Math.log2(R_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < S_single_counts_array.length; i++) {
        if (S_single_counts_array[i] == 0) {S_height.push(0);}
        else{S_height.push(parseFloat(((S_single_counts_array[i]/sequence_number)*(Math.log2(20) + (S_total_counts/total_letter_counts)*Math.log2(S_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < V_single_counts_array.length; i++) {
        if (V_single_counts_array[i] == 0) {V_height.push(0);}
        else{V_height.push(parseFloat(((V_single_counts_array[i]/sequence_number)*(Math.log2(20) + (V_total_counts/total_letter_counts)*Math.log2(V_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < W_single_counts_array.length; i++) {
        if (W_single_counts_array[i] == 0) {W_height.push(0);}
        else{W_height.push(parseFloat(((W_single_counts_array[i]/sequence_number)*(Math.log2(20) + (W_total_counts/total_letter_counts)*Math.log2(W_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < Y_single_counts_array.length; i++) {
        if (Y_single_counts_array[i] == 0) {Y_height.push(0);}
        else{Y_height.push(parseFloat(((Y_single_counts_array[i]/sequence_number)*(Math.log2(20) + (Y_total_counts/total_letter_counts)*Math.log2(Y_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }

      var height_columns = new Object();
      height_columns["A"] = A_height;
      height_columns["C"] = C_height;
      height_columns["G"] = G_height;
      height_columns["T"] = T_height;
      height_columns["U"] = U_height;
      height_columns["D"] = D_height;
      height_columns["E"] = E_height;
      height_columns["F"] = F_height;
      height_columns["H"] = H_height;
      height_columns["I"] = I_height;
      height_columns["K"] = K_height;
      height_columns["L"] = L_height;
      height_columns["M"] = M_height;
      height_columns["N"] = N_height;
      height_columns["P"] = P_height;
      height_columns["Q"] = Q_height;
      height_columns["R"] = R_height;
      height_columns["S"] = S_height;
      height_columns["V"] = V_height;
      height_columns["W"] = W_height;
      height_columns["Y"] = Y_height;
      sessionStorage.setItem('info', JSON.stringify(height_columns));
    }
  else {
    var sequence_number = sequence_data.length, sequence_length = sequence_data[0].length, total_letter_counts = sequence_data.length * (sequence_data[0].length);
    var A_single_counts_array = new Array(), C_single_counts_array = new Array(), G_single_counts_array = new Array(),
    T_single_counts_array = new Array(), U_single_counts_array = new Array();
    var A_total_counts = 0, C_total_counts = 0, G_total_counts = 0, T_total_counts = 0, U_total_counts = 0;

    for (var j = 0; j < sequence_data[0].length; j++){
      var A_single_counts = 0, C_single_counts = 0, G_single_counts = 0, T_single_counts = 0, U_single_counts = 0;
      for (var i = 0; i < sequence_data.length; i++) {
        if (sequence_data[i][j] == "A"||sequence_data[i][j] == "a") { A_single_counts++; A_total_counts++}
        else if (sequence_data[i][j] == "C"||sequence_data[i][j] == "c") {C_single_counts++; C_total_counts++}
        else if (sequence_data[i][j] == "G"|| sequence_data[i][j] == "g") {G_single_counts++; G_total_counts++}
        else if (sequence_data[i][j] == "T"||sequence_data[i][j] == "t") {T_single_counts++; T_total_counts++}
        else if (sequence_data[i][j] == "U"||sequence_data[i][j] == "u") {U_single_counts++; U_total_counts++}
      }
      A_single_counts_array.push(A_single_counts);
      C_single_counts_array.push(C_single_counts);
      G_single_counts_array.push(G_single_counts);
      T_single_counts_array.push(T_single_counts);
      U_single_counts_array.push(U_single_counts);
    }
    var A_height = new Array(), C_height = new Array(), G_height = new Array(), T_height = new Array(), U_height = new Array();

    var myselect = document.getElementById("composition"), index = myselect.selectedIndex;
    var compositionvalue = myselect.options[index].value;
    compositionvalue.onkeyup = function(){document.getElementById('text4').innerHTML = this.split("\n")}

    if (compositionvalue == "comp_auto") {
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2(A_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2(C_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2(G_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2(T_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2(U_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_equiprobable") {
      var A_percent = 0.25, C_percent=0.25, G_percent = 0.25, T_percent=0.25;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_Hsapiens") {
      var A_percent = 0.3, T_percent=0.3, C_percent=0.2, G_percent = 0.2;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_Celegans") {
      var A_percent = 0.32, T_percent=0.32, C_percent=0.18, G_percent = 0.18;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_Ecoli") {
      var A_percent = 0.2475, T_percent=0.2475, C_percent=0.2525, G_percent = 0.2525;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    } else if (compositionvalue == "comp_Mmusculus") {
      var A_percent = 0.29, T_percent=0.29, C_percent=0.21, G_percent = 0.21;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_Scerevisiae") {
      var A_percent = 0.31, T_percent=0.31, C_percent=0.19, G_percent = 0.19;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_CG") {
      var CGpercent = (parseFloat(document.getElementById("percentCG").value.split("\n")))/100;
      var A_percent=(1-CGpercent)/2, T_percent=(1-CGpercent)/2, C_percent=CGpercent/2, G_percent = CGpercent/2;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }//else if

    var height_columns = new Object();
    height_columns["A"] = A_height;
    height_columns["C"] = C_height;
    height_columns["G"] = G_height;
    height_columns["T"] = T_height;
    height_columns["U"] = U_height;
    sessionStorage.setItem('info', JSON.stringify(height_columns));
  }
} else {
  var filestoload = document.getElementById("sequence_file").files[0];
  var reader = new FileReader();
  reader.onload = function(e){
  const fileString = e.target.result.split("\n");
  var sequence_data = new Array();
  for(var line = 0; line < fileString.length; line++){
    if (fileString[line].search(">") != -1) {
      sequence_data.push(fileString[line+1].replace(/\s+/g, ""));
    }
  }
  document.getElementById('text2').innerHTML = fileString;
  var seq1 = sequence_data[0].toUpperCase();
  if (seq1.search("D")!=-1 || seq1.search("E")!=-1 || seq1.search("F")!=-1 || seq1.search("H")!=-1 ||
  seq1.search("I")!=-1 || seq1.search("K")!=-1 || seq1.search("L")!=-1 || seq1.search("M")!=-1 ||
  seq1.search("N")!=-1 || seq1.search("P")!=-1 || seq1.search("Q")!=-1 || seq1.search("R")!=-1 ||
  seq1.search("S")!=-1 || seq1.search("V")!=-1 || seq1.search("W")!=-1 || seq1.search("Y")!=-1) {
    var sequence_number = sequence_data.length, sequence_length = sequence_data[0].length, total_letter_counts = sequence_data.length * (sequence_data[0].length);
    var A_single_counts_array = new Array(), C_single_counts_array = new Array(), G_single_counts_array = new Array(),
    T_single_counts_array = new Array(), U_single_counts_array = new Array(), D_single_counts_array = new Array(),
    E_single_counts_array = new Array(), F_single_counts_array = new Array(), H_single_counts_array = new Array(),
    I_single_counts_array = new Array(), K_single_counts_array = new Array(), L_single_counts_array = new Array(),
    M_single_counts_array = new Array(), N_single_counts_array = new Array(), P_single_counts_array = new Array(),
    Q_single_counts_array = new Array(), R_single_counts_array = new Array(), S_single_counts_array = new Array(),
    V_single_counts_array = new Array(), W_single_counts_array = new Array(), Y_single_counts_array = new Array();
    var A_total_counts = 0, C_total_counts = 0, G_total_counts = 0, T_total_counts = 0, U_total_counts = 0,
    D_total_counts = 0, E_total_counts = 0, F_total_counts = 0, H_total_counts = 0, I_total_counts = 0,
    K_total_counts = 0, L_total_counts = 0, M_total_counts = 0, N_total_counts = 0, P_total_counts = 0,
    Q_total_counts = 0, R_total_counts = 0, S_total_counts = 0, V_total_counts = 0, W_total_counts = 0, Y_total_counts = 0;

    for (var j = 0; j < sequence_data[0].length; j++){
      var A_single_counts = 0, C_single_counts = 0, G_single_counts = 0, T_single_counts = 0, U_single_counts = 0,
      D_single_counts = 0, E_single_counts = 0, F_single_counts = 0, H_single_counts = 0, I_single_counts = 0,
      K_single_counts = 0, L_single_counts = 0, M_single_counts = 0, N_single_counts = 0, P_single_counts = 0,
      Q_single_counts = 0, R_single_counts = 0, S_single_counts = 0, V_single_counts = 0, W_single_counts = 0, Y_single_counts = 0;
      for (var i = 0; i < sequence_data.length; i++) {
        if (sequence_data[i][j] == "A"||sequence_data[i][j] == "a") { A_single_counts++; A_total_counts++}
        else if (sequence_data[i][j] == "C"|| sequence_data[i][j] == "c") {C_single_counts++; C_total_counts++}
        else if (sequence_data[i][j] == "G"|| sequence_data[i][j] == "g") {G_single_counts++; G_total_counts++}
        else if (sequence_data[i][j] == "T"|| sequence_data[i][j] == "t") {T_single_counts++; T_total_counts++}
        else if (sequence_data[i][j] == "U"|| sequence_data[i][j] == "u") {U_single_counts++; U_total_counts++}
        else if (sequence_data[i][j] == "D"|| sequence_data[i][j] == "d") {D_single_counts++; D_total_counts++}
        else if (sequence_data[i][j] == "E"|| sequence_data[i][j] == "e") {E_single_counts++; E_total_counts++}
        else if (sequence_data[i][j] == "F"|| sequence_data[i][j] == "f") {F_single_counts++; F_total_counts++}
        else if (sequence_data[i][j] == "H"|| sequence_data[i][j] == "h") {H_single_counts++; H_total_counts++}
        else if (sequence_data[i][j] == "I"|| sequence_data[i][j] == "i") {I_single_counts++; I_total_counts++}
        else if (sequence_data[i][j] == "K"|| sequence_data[i][j] == "k") {K_single_counts++; K_total_counts++}
        else if (sequence_data[i][j] == "L"|| sequence_data[i][j] == "l") {L_single_counts++; L_total_counts++}
        else if (sequence_data[i][j] == "M"|| sequence_data[i][j] == "m") {M_single_counts++; M_total_counts++}
        else if (sequence_data[i][j] == "N"|| sequence_data[i][j] == "n") {N_single_counts++; N_total_counts++}
        else if (sequence_data[i][j] == "P"|| sequence_data[i][j] == "p") {P_single_counts++; P_total_counts++}
        else if (sequence_data[i][j] == "Q"|| sequence_data[i][j] == "q") {Q_single_counts++; Q_total_counts++}
        else if (sequence_data[i][j] == "R"|| sequence_data[i][j] == "r") {R_single_counts++; R_total_counts++}
        else if (sequence_data[i][j] == "S"|| sequence_data[i][j] == "s") {S_single_counts++; S_total_counts++}
        else if (sequence_data[i][j] == "V"|| sequence_data[i][j] == "v") {V_single_counts++; V_total_counts++}
        else if (sequence_data[i][j] == "W"|| sequence_data[i][j] == "w") {W_single_counts++; W_total_counts++}
        else if (sequence_data[i][j] == "Y"|| sequence_data[i][j] == "y") {Y_single_counts++; Y_total_counts++}
      }
      A_single_counts_array.push(A_single_counts);
      G_single_counts_array.push(G_single_counts);
      T_single_counts_array.push(T_single_counts);
      C_single_counts_array.push(C_single_counts);
      U_single_counts_array.push(U_single_counts);
      D_single_counts_array.push(D_single_counts);
      E_single_counts_array.push(E_single_counts);
      F_single_counts_array.push(F_single_counts);
      H_single_counts_array.push(H_single_counts);
      I_single_counts_array.push(I_single_counts);
      K_single_counts_array.push(K_single_counts);
      L_single_counts_array.push(L_single_counts);
      M_single_counts_array.push(M_single_counts);
      N_single_counts_array.push(N_single_counts);
      P_single_counts_array.push(P_single_counts);
      Q_single_counts_array.push(Q_single_counts);
      R_single_counts_array.push(R_single_counts);
      S_single_counts_array.push(S_single_counts);
      V_single_counts_array.push(V_single_counts);
      W_single_counts_array.push(W_single_counts);
      Y_single_counts_array.push(Y_single_counts);
    }
    var A_height = new Array(), C_height = new Array(), G_height = new Array(), T_height = new Array(), U_height = new Array(),
    D_height = new Array(), E_height = new Array(), F_height = new Array(), H_height = new Array(), I_height = new Array(),
    K_height = new Array(), L_height = new Array(), M_height = new Array(), N_height = new Array(), P_height = new Array(),
    Q_height = new Array(), R_height = new Array(), S_height = new Array(), V_height = new Array(), W_height = new Array(), Y_height = new Array();

    for (var i = 0; i < A_single_counts_array.length; i++) {
      if (A_single_counts_array[i] == 0) {A_height.push(0);}
      else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(Math.log2(20) + (A_total_counts/total_letter_counts)*Math.log2(A_single_counts_array[i]/sequence_number))).toFixed(2)));}
        }
    for (var i = 0; i < C_single_counts_array.length; i++) {
      if (C_single_counts_array[i] == 0) {C_height.push(0);}
      else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(Math.log2(20) + (C_total_counts/total_letter_counts)*Math.log2(C_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < G_single_counts_array.length; i++) {
      if (G_single_counts_array[i] == 0) {G_height.push(0);}
      else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(Math.log2(20) + (G_total_counts/total_letter_counts)*Math.log2(G_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < T_single_counts_array.length; i++) {
      if (T_single_counts_array[i] == 0) {T_height.push(0);}
      else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(Math.log2(20) + (T_total_counts/total_letter_counts)*Math.log2(T_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < U_single_counts_array.length; i++) {
      if (U_single_counts_array[i] == 0) {U_height.push(0);}
      else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(Math.log2(20) + (U_total_counts/total_letter_counts)*Math.log2(U_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < D_single_counts_array.length; i++) {
      if (D_single_counts_array[i] == 0) {D_height.push(0);}
      else{D_height.push(parseFloat(((D_single_counts_array[i]/sequence_number)*(Math.log2(20) + (D_total_counts/total_letter_counts)*Math.log2(D_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < E_single_counts_array.length; i++) {
      if (E_single_counts_array[i] == 0) {E_height.push(0);}
      else{E_height.push(parseFloat(((E_single_counts_array[i]/sequence_number)*(Math.log2(20) + (E_total_counts/total_letter_counts)*Math.log2(E_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < F_single_counts_array.length; i++) {
      if (F_single_counts_array[i] == 0) {F_height.push(0);}
      else{F_height.push(parseFloat(((F_single_counts_array[i]/sequence_number)*(Math.log2(20) + (F_total_counts/total_letter_counts)*Math.log2(F_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < H_single_counts_array.length; i++) {
      if (H_single_counts_array[i] == 0) {H_height.push(0);}
      else{H_height.push(parseFloat(((H_single_counts_array[i]/sequence_number)*(Math.log2(20) + (H_total_counts/total_letter_counts)*Math.log2(H_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < I_single_counts_array.length; i++) {
      if (I_single_counts_array[i] == 0) {I_height.push(0);}
      else{I_height.push(parseFloat(((I_single_counts_array[i]/sequence_number)*(Math.log2(20) + (I_total_counts/total_letter_counts)*Math.log2(I_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < K_single_counts_array.length; i++) {
      if (K_single_counts_array[i] == 0) {K_height.push(0);}
      else{K_height.push(parseFloat(((K_single_counts_array[i]/sequence_number)*(Math.log2(20) + (K_total_counts/total_letter_counts)*Math.log2(K_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < L_single_counts_array.length; i++) {
      if (L_single_counts_array[i] == 0) {L_height.push(0);}
      else{L_height.push(parseFloat(((L_single_counts_array[i]/sequence_number)*(Math.log2(20) + (L_total_counts/total_letter_counts)*Math.log2(L_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < M_single_counts_array.length; i++) {
      if (M_single_counts_array[i] == 0) {M_height.push(0);}
      else{M_height.push(parseFloat(((M_single_counts_array[i]/sequence_number)*(Math.log2(20) + (M_total_counts/total_letter_counts)*Math.log2(M_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < N_single_counts_array.length; i++) {
      if (N_single_counts_array[i] == 0) {N_height.push(0);}
      else{N_height.push(parseFloat(((N_single_counts_array[i]/sequence_number)*(Math.log2(20) + (N_total_counts/total_letter_counts)*Math.log2(N_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < P_single_counts_array.length; i++) {
      if (P_single_counts_array[i] == 0) {P_height.push(0);}
      else{P_height.push(parseFloat(((P_single_counts_array[i]/sequence_number)*(Math.log2(20) + (P_total_counts/total_letter_counts)*Math.log2(P_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < Q_single_counts_array.length; i++) {
      if (Q_single_counts_array[i] == 0) {Q_height.push(0);}
      else{Q_height.push(parseFloat(((Q_single_counts_array[i]/sequence_number)*(Math.log2(20) + (Q_total_counts/total_letter_counts)*Math.log2(Q_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < R_single_counts_array.length; i++) {
      if (R_single_counts_array[i] == 0) {R_height.push(0);}
      else{R_height.push(parseFloat(((R_single_counts_array[i]/sequence_number)*(Math.log2(20) + (R_total_counts/total_letter_counts)*Math.log2(R_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < S_single_counts_array.length; i++) {
      if (S_single_counts_array[i] == 0) {S_height.push(0);}
      else{S_height.push(parseFloat(((S_single_counts_array[i]/sequence_number)*(Math.log2(20) + (S_total_counts/total_letter_counts)*Math.log2(S_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < V_single_counts_array.length; i++) {
      if (V_single_counts_array[i] == 0) {V_height.push(0);}
      else{V_height.push(parseFloat(((V_single_counts_array[i]/sequence_number)*(Math.log2(20) + (V_total_counts/total_letter_counts)*Math.log2(V_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < W_single_counts_array.length; i++) {
      if (W_single_counts_array[i] == 0) {W_height.push(0);}
      else{W_height.push(parseFloat(((W_single_counts_array[i]/sequence_number)*(Math.log2(20) + (W_total_counts/total_letter_counts)*Math.log2(W_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }
    for (var i = 0; i < Y_single_counts_array.length; i++) {
      if (Y_single_counts_array[i] == 0) {Y_height.push(0);}
      else{Y_height.push(parseFloat(((Y_single_counts_array[i]/sequence_number)*(Math.log2(20) + (Y_total_counts/total_letter_counts)*Math.log2(Y_single_counts_array[i]/sequence_number))).toFixed(2)));}
    }

    var height_columns = new Object();
    height_columns["A"] = A_height;
    height_columns["C"] = C_height;
    height_columns["G"] = G_height;
    height_columns["T"] = T_height;
    height_columns["U"] = U_height;
    height_columns["D"] = D_height;
    height_columns["E"] = E_height;
    height_columns["F"] = F_height;
    height_columns["H"] = H_height;
    height_columns["I"] = I_height;
    height_columns["K"] = K_height;
    height_columns["L"] = L_height;
    height_columns["M"] = M_height;
    height_columns["N"] = N_height;
    height_columns["P"] = P_height;
    height_columns["Q"] = Q_height;
    height_columns["R"] = R_height;
    height_columns["S"] = S_height;
    height_columns["V"] = V_height;
    height_columns["W"] = W_height;
    height_columns["Y"] = Y_height;
    sessionStorage.setItem('info', JSON.stringify(height_columns));
  }
  else {
    var sequence_number = sequence_data.length, sequence_length = sequence_data.length, total_letter_counts = sequence_data.length * (sequence_data[0].length);
    var A_single_counts_array = new Array(), C_single_counts_array = new Array(), G_single_counts_array = new Array(),
    T_single_counts_array = new Array(), U_single_counts_array = new Array();
    var A_total_counts = 0, C_total_counts = 0, G_total_counts = 0, T_total_counts = 0, U_total_counts = 0;

    for (var j = 0; j < sequence_data[0].length; j++){
      var A_single_counts = 0, C_single_counts = 0, G_single_counts = 0, T_single_counts = 0, U_single_counts = 0;
      for (var i = 0; i < sequence_data.length; i++) {
        if (sequence_data[i][j] == "A"||sequence_data[i][j] == "a") { A_single_counts++; A_total_counts++}
        else if (sequence_data[i][j] == "C"||sequence_data[i][j] == "c") {C_single_counts++; C_total_counts++}
        else if (sequence_data[i][j] == "G"|| sequence_data[i][j] == "g") {G_single_counts++; G_total_counts++}
        else if (sequence_data[i][j] == "T"||sequence_data[i][j] == "t") {T_single_counts++; T_total_counts++}
        else if (sequence_data[i][j] == "U"||sequence_data[i][j] == "u") {U_single_counts++; U_total_counts++}
      }
      A_single_counts_array.push(A_single_counts);
      C_single_counts_array.push(C_single_counts);
      G_single_counts_array.push(G_single_counts);
      T_single_counts_array.push(T_single_counts);
      U_single_counts_array.push(U_single_counts);
    }
    var A_height = new Array(), C_height = new Array(), G_height = new Array(), T_height = new Array(), U_height = new Array();

    var myselect=document.getElementById("composition"), index = myselect.selectedIndex;
    var compositionvalue = myselect.options[index].value;
    compositionvalue.onkeyup = function(){document.getElementById('text4').innerHTML = this.split("\n")}
    if (compositionvalue == "comp_auto") {
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2(A_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2(C_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2(G_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2(T_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2(U_single_counts_array[i]/sequence_number))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_equiprobable") {
      var A_percent = 0.25, C_percent=0.25, G_percent = 0.25, T_percent=0.25;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_Hsapiens") {
      var A_percent = 0.3, T_percent=0.3, C_percent=0.2, G_percent = 0.2;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_Celegans") {
      var A_percent = 0.32, T_percent=0.32, C_percent=0.18, G_percent = 0.18;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_Ecoli") {
      var A_percent = 0.2475, T_percent=0.2475, C_percent=0.2525, G_percent = 0.2525;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_Mmusculus") {
      var A_percent = 0.29, T_percent=0.29, C_percent=0.21, G_percent = 0.21;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_Scerevisiae") {
      var A_percent = 0.31, T_percent=0.31, C_percent=0.19, G_percent = 0.19;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }
    else if (compositionvalue == "comp_CG") {
      var CGpercent = (parseFloat(document.getElementById("percentCG").value.split("\n")))/100;
      CGpercent.onkeyup = function(){document.getElementById('text4').innerHTML = this}
      var A_percent =(1-CGpercent)/2, T_percent=(1-CGpercent)/2, C_percent=CGpercent/2, G_percent = CGpercent/2;
      for (var i = 0; i < A_single_counts_array.length; i++) {
        if (A_single_counts_array[i] == 0) {A_height.push(0);}
        else{A_height.push(parseFloat(((A_single_counts_array[i]/sequence_number)*(2 + (A_total_counts/total_letter_counts)*Math.log2((A_single_counts_array[i]/sequence_number)/A_percent))).toFixed(2)));}
      }
      for (var i = 0; i < C_single_counts_array.length; i++) {
        if (C_single_counts_array[i] == 0) {C_height.push(0);}
        else{C_height.push(parseFloat(((C_single_counts_array[i]/sequence_number)*(2 + (C_total_counts/total_letter_counts)*Math.log2((C_single_counts_array[i]/sequence_number)/C_percent))).toFixed(2)));}
      }
      for (var i = 0; i < G_single_counts_array.length; i++) {
        if (G_single_counts_array[i] == 0) {G_height.push(0);}
        else{G_height.push(parseFloat(((G_single_counts_array[i]/sequence_number)*(2 + (G_total_counts/total_letter_counts)*Math.log2((G_single_counts_array[i]/sequence_number)/G_percent))).toFixed(2)));}
      }
      for (var i = 0; i < T_single_counts_array.length; i++) {
        if (T_single_counts_array[i] == 0) {T_height.push(0);}
        else{T_height.push(parseFloat(((T_single_counts_array[i]/sequence_number)*(2 + (T_total_counts/total_letter_counts)*Math.log2((T_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
      for (var i = 0; i < U_single_counts_array.length; i++) {
        if (U_single_counts_array[i] == 0) {U_height.push(0);}
        else{U_height.push(parseFloat(((U_single_counts_array[i]/sequence_number)*(2 + (U_total_counts/total_letter_counts)*Math.log2((U_single_counts_array[i]/sequence_number)/T_percent))).toFixed(2)));}
      }
    }//else if

    var height_columns = new Object();
    height_columns["A"] = A_height;
    height_columns["C"] = C_height;
    height_columns["G"] = G_height;
    height_columns["T"] = T_height;
    height_columns["U"] = U_height;
    sessionStorage.setItem('info', JSON.stringify(height_columns));
  }
}
reader.readAsText(filestoload);
}
}
var columns = JSON.parse(sessionStorage.getItem('info'));





//logo colors
var seqlogo = {"colors": {
  "nucleotides": {"A": "green", "C": "blue", "G": "orange", "T": "red", "U": "OrangeRed"},
  "aminoacids": {"A": "orangered", "C": "Gold", "G": "DodgerBlue", "T": "Gold", "U": "orangered",
  "D": "seagreen", "E": "seagreen", "F": "black", "H": "slateblue", "I":"orangered", "K":"slateblue",
  "L":"orangered", "M":"orangered", "N": "Gold", "P": "DodgerBlue", "Q": "Gold", "R": "slateblue",
  "S": "Gold", "V": "orangered", "W": "black", "Y": "black",}}};


//the function to draw the logo
function sequence_logo() {
  function range(n) {//定义range函数，与python中的range函数功能一样，生成0到n-1的一个数列
    var a = new Array(n);
    for(var i = 0; i < a.length; i++) a[i] = i;
    return a;
  }

  function sort_order(x) {//定义sort_order函数
    var order = range(x.length);
    order.sort(function(a, b) {
      return x[a] - x[b];
    });
    return order;
  }

  //设置图像尺寸
  var width = 1000, height = 450;
  var element = document.getElementById('logo');
  element.width = width;
  element.height = height;

  // Get setttings from options or default values.
  var defaults = {
    "colors": seqlogo.colors.nucleotides,
    "ylabel": "bits",
    "textcolor": "black",
    "backgroundcolor": "white",
    "border": 25,//外边距
    "padding": 5,//内边距
    "labelfont": "bold 20px Arial",
    "letterfont": "40px Lucida Console",
    "fontpixelheight": 30,
    "ymax": 0,
    "sort": true
  };

  if ('D' in columns || 'E' in columns || 'F' in columns || 'H' in columns || 'I' in columns || 'K' in columns || 'L' in columns || 'M' in columns ||
  'N' in columns || 'P' in columns || 'Q' in columns || 'R' in columns || 'S' in columns || 'V' in columns || 'W' in columns || 'Y' in columns) {
    var options = {"colors": seqlogo.colors.aminoacids};
  }
  else {
    var options = {"colors": seqlogo.colors.nucleotides};
  }

  var settings = {};
  for(var p in defaults) {
    settings[p] = (options[p] == null) ? defaults[p] : options[p];
  }

  var letters = Object.keys(columns);//取object的keys这一列
  var seqlength = columns[letters[0]].length;//取含有letters的第一项来计算序列长度

  // collect stats on columns
  var ymax = settings.ymax;
  for(var i = 0; i < seqlength; i++) {//i是letters的第一项所包含的元素个数
    var colsum = 0;
    for(var j = 0; j < letters.length; j++) {//j是letters的个数
      colsum += columns[letters[j]][i];
    }
    if(colsum > ymax) ymax = colsum;
  }

  var ctx = element.getContext("2d");
  ctx.save();
  // draw the background
  ctx.fillStyle = settings.backgroundcolor;
  ctx.fillRect(0, 0, width, height);
  // draw the letters
  var columnx = settings.border;
  var columndelta = (width - settings.border) / seqlength;//每个位点的空间
  var yheight = height - settings.border;
  ctx.font = settings.letterfont;
  for (var col = 0; col < seqlength; col++) {//1for语句的开始
    var totalweight = 0.0;
    var lettery = yheight;
    var values = letters.map(function(letter) {return columns[letter][col];})
    if(settings.sort) {//1if语句的开始
      var order = sort_order(values);
    } else {//1if语句的结束以及else语句的开始
      var order = range(letters.length);
    }//else语句的结束
    for(var i = 0; i < letters.length; i++) {//2for语句的开始
      var letter = letters[order[i]];
      var weight = columns[letter][col];
      if(weight > 0) {//2if语句的开始
        totalweight += weight;
        ctx.save();
        ctx.fillStyle = letter in settings.colors ? settings.colors[letter] : "black";
        ctx.translate(columnx, lettery);
        var scaley = (yheight * weight) / (settings.fontpixelheight * ymax);
        var mt = ctx.measureText(letter);
        var letterwidth = mt.width;
        var scalex = columndelta / letterwidth;
        ctx.scale(scalex, scaley);
        ctx.fillText(letter, 0, 0);
        ctx.restore();
        lettery -= (weight * yheight) / ymax;
      }//2if语句的结束
    }//2for语句的结束
    // x-axis labels
    ctx.save();
    ctx.fillStyle = settings.textcolor;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.font = settings.labelfont;
    ctx.fillText((col + 1).toString(), columnx + columndelta/2, height-settings.border+settings.padding);
    ctx.restore();
    columnx += columndelta;
  }//1for语句的结束
  // y-axis labels
  ctx.save();
  ctx.fillStyle = settings.textcolor;
  ctx.font = settings.labelfont;
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.fillText(ymax.toPrecision(1), settings.border-settings.padding, settings.border-settings.padding);
  ctx.textAlign = "center";
  ctx.font = "bold 25px Georgia";
  var item = document.getElementById('title');
  item.onkeyup = function(){document.getElementById('text3').innerHTML = this.value.split("\n")}
  var logotitle = document.getElementById('title').value.split("\n");
  ctx.fillText(logotitle, width/2, 3);
  ctx.font = settings.labelfont;
  ctx.textBaseline = "bottom";
  ctx.fillText("0", settings.border-settings.padding, height-settings.border);
  ctx.translate(settings.border-settings.padding, (height-settings.border)/2);
  ctx.rotate(-Math.PI/2);
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.fillText(settings.ylabel, 0, 0);
  ctx.restore();
  return element;
}


//the function to download the image
function downloadPNG(id, fileName) {
  var canvasElement = document.getElementById(id);
  var MIME_TYPE = "image/png";
  var imgURL = canvasElement.toDataURL(MIME_TYPE);
  var dlLink = document.createElement('a');
  dlLink.download = fileName;
  dlLink.href = imgURL;
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);
}
